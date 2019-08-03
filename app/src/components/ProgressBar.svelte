<script>
  import { currentQuestion } from "../stores/currentQuestion";
  import { questionStore } from "../stores/questionStore";

  let myBarWidth = 0;

  function addProgress() {
    myBarWidth += 100 / ($questionStore.length - 1);
    if (myBarWidth > 100) {
      myBarWidth = 100;
    }
    document.getElementById("myBar").style.width = myBarWidth + "%";
    $currentQuestion++;
  }
</script>

<style>
  #myProgress {
    width: 100%;
    background-color: #ddd;
    margin-bottom: 20px;
  }
  #myBar {
    height: 30px;
    background-color: #5cb85c;
    /* width of the bar set initially to 0% to hide it */

    width: 0%;
    /* transition for smooth animation */
    transition: all ease-in-out 0.5s;
  }
</style>

<!-- Progress bar -->
<div id="myProgress">
  <div id="myBar" />
</div>
<!-- Buttons -->
{#if $currentQuestion != $questionStore.length - 1}
  <button id="next" on:click={addProgress}>Neste</button>
{:else}
  <button id="end">Fullfør quiz</button>
{/if}
