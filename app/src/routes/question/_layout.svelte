<script>
  export let segment;
  import { goto } from "@sapper/app";
  import { afterUpdate } from "svelte";

  // Stores
  import user from "../../stores/user";
  import index from "../../stores/index";
  import answers from "../../stores/answers";
  import question from "../../stores/question";
  import questions from "../../stores/questions";
  import unanswered from "../../stores/unanswered";
  import selectedAnswer from "../../stores/selectedAnswer";

  // Components
  import ProgressBar from "./_components/_ProgressBar.svelte";

  let areYouSure = false;

  function pushAnswer() {
    const answer = {
      user: $user,
      question_id: $question._id,
      selected_answer: $selectedAnswer.selected,
      correct: $selectedAnswer.correct || false,
      ended_question: new Date(Date.now()).toString()
    };

    if ($selectedAnswer.selected === null) {
      $unanswered.push($index);
    }

    $answers.push(answer);

    $selectedAnswer = { selected: null };
  }

  function next() {
    pushAnswer();
    if ($index < $questions.length) $index++;

    console.log($answers);
    console.log($unanswered);
  }

  function submit(e, force = false) {
    pushAnswer();
    goto("/results");
  }
</script>

<style>
  header {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }

  article {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  section {
    margin: 50px;
  }

  button {
    width: 8rem;
  }

  div {
    position: fixed;
    top: 45%;
    left: 0;
    right: 0;
    margin: 0 auto;

    background-color: lightgrey;
  }
</style>

<svelte:window on:click={() => (areYouSure = false)} />

<header>
  <ProgressBar len={$questions.length} />
  <!-- Buttons -->
  {#if $index != $questions.length - 1}
    <button id="next" on:click={next}>Neste</button>
  {:else}
    <button id="end" on:click={submit}>Fullfør quiz</button>
  {/if}
</header>
<article>
  {#if areYouSure}
    <div on:click|stopPropagation>
      <p>Are you sure you wish to submit you answers and view the results?</p>
      <p>You haven't answered question {$unanswered.join(', ')}</p>
      <button on:click|stopPropagation={() => (areYouSure = false)}>
        Go back
      </button>
      <button on:click|stopPropagation={e => submit(e, true)}>Submit!</button>
    </div>
  {/if}
  <section>
    <slot />
  </section>
</article>
