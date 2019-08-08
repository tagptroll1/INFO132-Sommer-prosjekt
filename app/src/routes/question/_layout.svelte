<script>
  export let segment;
  import { afterUpdate } from "svelte";
  import questions from "../../stores/questions";
  import index from "../../stores/index";
  import ProgressBar from "./_components/_ProgressBar.svelte";

  function next() {
    if ($index < $questions.length) $index++;
  }
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
  {#if $index != $questions.length - 1}
    <button id="next" on:click={next}>Neste</button>
  {:else}
    <button id="end">Fullfør quiz</button>
  {/if}
</article>
