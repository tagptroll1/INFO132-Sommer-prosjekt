<script>
  import { question } from "../../../stores/question";
  import { questionStore } from "../../../stores/questionStore";
  import { afterUpdate } from "svelte";

  let myBar;
  let myBarWidth = 0;
  let ind = 1;
  let max = 1;

  afterUpdate(() => {
    $question;
    myBarWidth += 100 / ($questionStore.length - 1);
    if (myBarWidth > 100) {
      myBarWidth = 100;
    }
    myBar.style.width = myBarWidth + "%";
    ind = question.index() + 1;
    max = $questionStore.length;
  });
</script>

<style>
  #myProgress {
    position: relative;
    width: 80%;
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

  span {
    position: absolute;
    top: 10%;
    left: 45%;
  }
</style>

<!-- Progress bar -->
<div id="myProgress">
  <span>{ind} / {max}</span>
  <div id="myBar" bind:this={myBar} />
</div>
