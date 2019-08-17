<script>
  import hljs from "highlight.js/lib/highlight";
  import python from "highlight.js/lib/languages/python";
  hljs.registerLanguage("python", python);

  export let code = undefined;
  $: highlighted = hljs.highlight("python", code);
</script>

<style>
  code {
    display: block;
    padding: 5px;
    border-radius: 5px;

    background-color: red;
  }
</style>

<pre>
  <code>
    {@html highlighted.value}
  </code>
</pre>
