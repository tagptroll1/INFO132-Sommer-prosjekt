<script context="module">
  export async function preload(page, session) {
    const resp = await this.fetch("api/dropdown");

    if (!resp.ok) return resp.statusText;

    const questions = await resp.json();
    return { questions };
  }
</script>

<script>
  export let questions;

  import Dropdown from "../../components/Dropdown.svelte";
  import ProgressBar from "../../components/ProgressBar.svelte";
  import QuestionText from "../../components/QuestionText.svelte";
  import Codeblock from "../../components/Codeblock.svelte";

  import { questionStore } from "../../stores/questionStore";
  import { currentQuestion } from "../../stores/currentQuestion";

  for (let i = 0; i < questions.length; i++) {
    $questionStore[i] = questions[i];
  }

  // Current question --> $currentQuestion


</script>

<style>
  h2 {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    text-align: center;
  }
</style>

<h2>Multiple choice</h2>


<QuestionText currentQuestion={$questionStore[$currentQuestion]}/>
<Codeblock> { $questionStore[$currentQuestion]["question_code"] }</Codeblock>
<ProgressBar numQuestions={$questionStore.length}/> 
<Dropdown currentQuestion={$questionStore[$currentQuestion]}/>