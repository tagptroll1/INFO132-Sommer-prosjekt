<script>
    import hljs from 'highlight.js/lib/highlight';
    import python from 'highlight.js/lib/languages/python';
    import { onMount } from "svelte";
    hljs.registerLanguage('python', python);    
    
    let codeTag; 

    onMount(() => {
        codeTag = hljs.highlightBlock(codeTag);
    })
</script>


<style>
    code {
        display: block;
        padding: 5px;
        border-radius: 5px;
    }
</style>

<pre>
    <code bind:this={codeTag}>
        <slot></slot>
    </code>
</pre>
