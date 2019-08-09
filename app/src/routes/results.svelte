<script>
  import unanswered from "../stores/unanswered";
  import answers from "../stores/answers";
  import { onMount } from "svelte";

  onMount(async () => {
    console.log($answers);

    if ($answers.length > 0 && process.browser) {
      await fetch("/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify($answers)
      });
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
