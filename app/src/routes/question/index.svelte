<script context="module">
  export async function preload({ params }) {
    const { slug } = params;
    return { slug };
  }
</script>

<script>
  const type = "dropdown";
  export let slug;

  import Question from "./_Question.svelte";
  import questions from "../../stores/questions";
  import question from "../../stores/question";

  if ($questions.length <= 0 && process.browser) {
    fetch(`api/${type}`) // Change this to get different questions
      .then(resp => resp.json())
      .then(json => {
        $questions = json;
      })
      .catch(err => console.error(err));
  } else {
    $question;
  }
</script>

{#if $question}
  <Question question={$question} />
{/if}
