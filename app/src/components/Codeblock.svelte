<script>
    import hljs from 'highlight.js';

    export let code;
    let stuff = hljs.highlight("python", code);

</script>


<style>
    code {
        display: block;
        padding: 5px;
        border-radius: 5px;
    }
</style>

<pre><code class="python">{@html stuff.value}</code></pre>
