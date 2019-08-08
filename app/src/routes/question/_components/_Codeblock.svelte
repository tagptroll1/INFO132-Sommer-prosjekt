<script>
  import question from "../../../stores/question";
  import hljs from "highlight.js/lib/highlight";
  import python from "highlight.js/lib/languages/python";
  import { afterUpdate } from "svelte";
  hljs.registerLanguage("python", python);

  $: highlighted = hljs.highlight("python", $question.question_code);
</script>

<style>
  code {
    display: block;
    padding: 5px;
    border-radius: 5px;
  }
</style>

<pre>
  <code>
    {@html highlighted.value}
  </code>
</pre>
