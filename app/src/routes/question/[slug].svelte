<script context="module">
  export async function preload({ params }) {
    const { slug } = params;
    return { slug };
  }
</script>

<script>
  const type = "multi_choice";
  export let slug;

  import Question from "./_Question.svelte";
  import { questionStore } from "../../stores/questionStore";
  import { question } from "../../stores/question";

  if ($questionStore.length <= 0 && process.browser) {
    fetch(`api/${type}`) // Change this to get different questions
      .then(resp => resp.json())
      .then(json => {
        $questionStore = json;
        question.setQ(slug);
      })
      .catch(err => console.error(err));
  } else {
    $question = $question;
  }
</script>

{#if $question}
  <Question question={$question} />
{/if}
