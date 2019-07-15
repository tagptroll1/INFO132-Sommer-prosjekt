<script>
  import Codeblock from "./Codeblock.svelte";
  export let currentChoices;

  function handleClick(e) {
    console.log(e.target.innerText);
  }
</script>

<style>
  #choices {
    padding: 40px;
  }

  li {
    list-style: none;
  }
</style>

<div id="choices">
  <ul>
    {#each currentChoices['alternatives'] as alternative}
      <li on:click={handleClick}>
        <Codeblock>{alternative}</Codeblock>
      </li>
    {/each}
  </ul>
</div>
