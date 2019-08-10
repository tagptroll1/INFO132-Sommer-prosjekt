<script>
  import unanswered from "../stores/unanswered";
  import answers from "../stores/answers";
  import { beforeUpdate, onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { goto } from "@sapper/app";

  import index from "../stores/index";
  import question from "../stores/question";
  import questions from "../stores/questions";
  import selectedAnswer from "../stores/selectedAnswer";

  import Codeblock from "./question/_components/_Codeblock.svelte";
  import DropBlock from "./question/_components/_Dropdown.svelte";

  let datapack = [];
  $questions.forEach(q => datapack.push({ ...q, show: false }));

  onMount(() => {});

  beforeUpdate(async () => {
    $selectedAnswer = { selected: null };
    $index = 0;

    if (Object.keys($answers).length > 0 && process.browser) {
      await fetch("/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(Object.values($answers))
      });
    } else {
      goto("/");
    }
  });
</script>

<style>
  span {
    color: red;
  }
  .correct {
    color: green;
  }

  h2 {
    position: relative;
    z-index: 5;
    margin: 0;
    padding: 0;
    background-color: inherit;
  }

  li {
    position: relative;

    background-color: white;
    padding: 20px;
    margin: 20px;
    max-width: 90%;
  }

  ol {
    margin: 0;
    padding: 0;
    list-style: none;
    background-color: lightgrey;
    width: 60%;
  }

  code {
    background-color: burlywood;
  }
</style>

<h1>Question results</h1>
{#if datapack}
  <ol>
    {#each datapack as quest, i}
      <li on:click={() => (quest.show ^= 1)}>
        <h2>
          <span class:correct={$answers[quest._id].correct}>
            {$answers[quest._id].correct ? '✔' : '✖'}
          </span>
          Question {i + 1}
        </h2>
        {#if quest.show}
          <section
            out:fly={{ y: -100, duration: 100 }}
            in:fly={{ y: -100, duration: 500 }}>
            <p>{quest.question_text}</p>
            <Codeblock code={quest.question_code.replace('@@', '[ ]')} />

            <p>
              You selected:
              <code>{$answers[quest._id].selected_answer || 'Nothing'}</code>

            </p>
            {#if !$answers[quest._id].correct}
              <p>
                Correct answer was
                <code>{quest.question_answer}</code>
              </p>
            {/if}
          </section>
        {/if}
      </li>
    {/each}
  </ol>
{/if}
