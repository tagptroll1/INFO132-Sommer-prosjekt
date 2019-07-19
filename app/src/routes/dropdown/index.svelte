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
</script>

<style>
  h1{
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    text-align: center;
  }
  h2 {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    text-align: center;
  }
</style>

<!---
questions have the following variants:
    tags: List
    difficulty: int
    question_text: str
    question_code: str
    question_answer: str
    choices: List
--->



<h1>Dropdown</h1>
{#each questions as question}
  <h2>{question.question_text}</h2>
  <p>{question.question_code}</p>
  <Dropdown currentChoices={question} />
{/each}
