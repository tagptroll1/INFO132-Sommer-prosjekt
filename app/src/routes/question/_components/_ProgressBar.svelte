<script>
  import question from "../../../stores/question";
  import questions from "../../../stores/questions";
  import index from "../../../stores/index";
  import { afterUpdate } from "svelte";

  let myBar;
  let myBarWidth = 0;

  afterUpdate(() => {
    $question;
    myBarWidth += 100 / ($questions.length - 1);
    if (myBarWidth > 100) {
      myBarWidth = 100;
    }
    myBar.style.width = myBarWidth + "%";
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
  <span>{$index + 1} / {$questions.length}</span>
  <div id="myBar" bind:this={myBar} />
</div>
