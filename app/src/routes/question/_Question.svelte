<script>
  import { onMount } from "svelte";

  import question from "../../stores/question";
  import selectedAnswer from "../../stores/selectedAnswer";

  import Dropdown from "./_Dropdown.svelte";
  import MultiChoice from "./_MultiChoice.svelte";
  import FillIn from "./_FillIn.svelte";
  import ProgressBar from "./_components/_ProgressBar.svelte";

  onMount(() => {
    $question;
  });

  function handleEvent(event) {
    $selectedAnswer = event.detail;
  }
</script>

{#if $question.type === 'dropdown'}
  <Dropdown on:selectQuestion={handleEvent} />
{:else if $question.type === 'multi_choice'}
  <MultiChoice on:selectQuestion={handleEvent} />
{:else if $question.type === 'fill_in'}
  <FillIn on:selectQuestion={handleEvent} />
{/if}
