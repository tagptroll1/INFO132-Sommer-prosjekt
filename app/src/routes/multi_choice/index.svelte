<script context="module">
  export async function preload(page, session) {
    const resp = await this.fetch("api/multi_choice");

    if (!resp.ok) return resp.statusText;

    const questions = await resp.json();

    return { questions };
  }
</script>

<script>
  import ProgressBar from "../../components/ProgressBar.svelte";
  import MultipleChoiceAlternatives from "../../components/MultipleChoiceAlternatives.svelte";
  import QuestionText from "../../components/QuestionText.svelte";
  import Codeblock from "../../components/Codeblock.svelte";

  export let questions;

  import { questionStore } from "../../stores/questionStore";
  import { currentQuestion } from "../../stores/currentQuestion";
  // Storing the questions to be presented in a global Svelte store

  for (let i = 0; i < questions.length; i++) {
    $questionStore[i] = questions[i];
  }
  // Current question --> $currentQuestion
</script>

<style>
  h1 {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    text-align: center;
  }
</style>

<h1>Multiple choice</h1>

<QuestionText />
<Codeblock>{$questionStore[$currentQuestion]['question_code']}</Codeblock>
<MultipleChoiceAlternatives />
<ProgressBar />
