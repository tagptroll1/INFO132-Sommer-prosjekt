<script>
  import Codeblock from "./Codeblock.svelte";
  export let currentChoices;
  export let correctAnswer;
  let selected;
  let correct = false;
  

  function handleClick() {
    console.log(selected)
    console.log("handleClick ran")
    if(selected == currentChoices.question_answer){
      correct = true;
    }
    else{
      correct = false;
    }
	}
</script>

<style>
  
</style>


	<select bind:value={selected}>
    {#each currentChoices['alternatives'] as alternative}
      <option on:click={handleClick} value={alternative}>
				{alternative}
			</option>
    {/each}
  </select>


<p>selected question {selected}</p>
{#if correct}
  <p>You picked the right answer!</p>
{/if}