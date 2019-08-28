

<script>
  import { slide } from "svelte/transition";

  let isOpen = false;
  let selected = "";

  import questions from "../../../stores/questions";
  import question from "../../../stores/question";
  import index from "../../../stores/index";
  import user from "../../../stores/user";

let showAlternatives = false;
function handleSelect(event){
  selected = event.target.getAttribute("data-value");
  //event.target.style.background = "grey"
}
</script>

<style>

</style>

<section>
<h1 on:click={()=>showAlternatives = !showAlternatives}>SE ALTERNATIVER</h1>
{#if showAlternatives}
  <div transition:slide>
    {#each $question.alternatives as alternative}
      <button id={alternative} on:click={handleSelect} data-value={alternative} style="">{alternative}</button><br>
    {/each}
  </div>
{/if}
</section>

