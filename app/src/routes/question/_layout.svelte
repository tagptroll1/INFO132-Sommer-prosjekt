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
    display: flex;
    align-items: center;
    flex-direction: column;
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
  }
</style>

<header>
  <ProgressBar len={$questions.length} />
  <!-- Buttons -->
  {#if $index != $questions.length - 1}
    <button id="next" on:click={next}>Neste</button>
  {:else}
    <button id="end">Fullfør quiz</button>
  {/if}
</header>
<article>
  <section>
    <slot />
  </section>
</article>
