<script>
  export let segment;
  import { afterUpdate } from "svelte";
  import { question } from "../../stores/question";
  import { questionStore } from "../../stores/questionStore";
  import ProgressBar from "./_components/_ProgressBar.svelte";
  let ind = 0;

  afterUpdate(() => {
    $question;
    ind = question.index();
  });
</script>

<style>
  header {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  article {
    display: flex;
    flex-direction: column;
  }

  section {
    margin: 50px;
  }

  button {
    width: 8rem;
    align-self: flex-end;
  }
</style>

<header>
  <ProgressBar />
</header>
<article>

  <section>
    <slot />
  </section>
  <!-- Buttons -->
  {#if ind != $questionStore.length - 1}
    <button id="next" on:click={question.next}>Neste</button>
  {:else}
    <button id="end">Fullfør quiz</button>
  {/if}
</article>
