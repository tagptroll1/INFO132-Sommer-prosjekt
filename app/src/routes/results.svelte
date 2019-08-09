<script>
  import unanswered from "../stores/unanswered";
  import answers from "../stores/answers";
  import { beforeUpdate } from "svelte";
  import { goto } from "@sapper/app";

  import index from "../stores/index";
  import question from "../stores/question";
  import questions from "../stores/questions";
  import selectedAnswer from "../stores/selectedAnswer";

  beforeUpdate(async () => {
    $selectedAnswer = { selected: null };
    $index = 0;
    $questions = [];

    if ($answers.length > 0 && process.browser) {
      await fetch("/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify($answers)
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
</style>

<h1>Question results</h1>
{#if $answers.length > 0}
  <ol>
    {#each $answers as answer}
      <li>
        <p>
          You selected: {answer.selected_answer} which was
          <span class:correct={answer.correct}>
            {answer.correct ? 'Correct' : 'Incorrect'}
          </span>
        </p>
      </li>
    {/each}
  </ol>
{:else}
  <p>No answers were stored</p>
{/if}
