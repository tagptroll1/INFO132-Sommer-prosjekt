<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { goto } from "@sapper/app";
  import { postAndGetResponse } from "api.js";

  import questions from "../stores/questions";

  import Codeblock from "./question/_components/_Codeblock.svelte";

  let any_answers = $questions.some(
    q => q.answer.selected_answer !== "No answer"
  );

  if (!any_answers && process.browser) {
    alert("No questions were answered, so nothing to show");
    goto("/");
  }

  let datapack = init();

  async function init() {
    const idsAnswerSets = {};
    const return_value = [];

    $questions.forEach(q => (idsAnswerSets[q._id] = q.answer));
    let feedbacks = await postAndGetResponse(idsAnswerSets);

    $questions.forEach((q, i) => {
      const feedback_set = feedbacks.find(f => f.question_id === q._id) || {};
      let feedback = feedback_set[q.answer.selected_answer];

      return_value.push({
        ...q,
        show: false,
        feedback
      });
    });

    return return_value;
  }
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
{#await datapack}
  loading..
{:then resp}
  <ol>
    {#each resp as quest, i}
      <li on:click={() => (quest.show ^= 1)}>
        <h2>
          <span class:correct={quest.answer.correct}>
            {quest.answer.correct ? '✔' : '✖'}
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
              <code>{quest.answer.selected_answer || 'Nothing'}</code>

            </p>
            {#if !quest.answer.correct}
              <p>
                Correct answer was
                <code>{quest.question_answer}</code>
              </p>
            {/if}
            {#if quest.feedback}
              <p>{quest.feedback}</p>
            {/if}
          </section>
        {/if}
      </li>
    {/each}
  </ol>
{:catch}
  ...
{/await}
