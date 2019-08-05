<script>
  import question from "../../../stores/question";
  let selected;
  $: pieces = $question.question_code.split("@@");
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
    {pieces[0]}<select
      bind:value={selected}
      on:change={() => console.log(selected == $question.question_answer)}>
      <option value="" />
      {#each $question.alternatives as item}
        <option value={item}>{item}</option>
      {/each}
    </select>{pieces[1] || ''}
  </code>
</pre>
