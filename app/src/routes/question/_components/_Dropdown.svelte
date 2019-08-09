<script>
  import question from "../../../stores/question";
  import hljs from "highlight.js/lib/highlight";
  import python from "highlight.js/lib/languages/python";
  import { beforeUpdate, createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  hljs.registerLanguage("python", python);

  let selected;

  let prev_id;
  let piece1 = "";
  let piece2 = "";
  $: pieces = $question.question_code.split("@@");

  function disp() {
    dispatch("selectQuestion", {
      selected,
      correct: selected == $question.question_answer
    });
  }

  beforeUpdate(() => {
    if (prev_id !== $question._id) {
      selected = "";
    }

    piece1 = hljs.highlight("python", pieces[0]);
    piece2 = hljs.highlight("python", pieces[1]);
    prev_id = $question._id;
  });
</script>

<style>
  pre,
  code {
    background-color: var(--bg-main);
    white-space: pre-wrap;
    word-wrap: break-word;
  }
</style>

<pre>
  <code>
    {@html piece1.value} <select bind:value={selected} on:change={disp}>
      <option value="" />
      {#each $question.alternatives as item}
        <option value={item}>{item}</option>
      {/each}
    </select> {@html piece2.value || ''}
  </code>
</pre>
