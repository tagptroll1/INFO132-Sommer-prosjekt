<script context="module">
  export async function preload(page, session) {
    const resp = await this.fetch("api/multi_choice");

    if (!resp.ok) return resp.statusText;

    const questions = await resp.json();
    return { questions };
  }
</script>

<script>
  export let questions;
  import MultipleChoice from "../../components/MultipleChoice.svelte";
</script>

<style>
  h2 {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    text-align: center;
  }
</style>

<h1>Multichoice</h1>
{#each questions as question}
  <h2>{question.question_text}</h2>
  <MultipleChoice currentChoices={question} />
{/each}
