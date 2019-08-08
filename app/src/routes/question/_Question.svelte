<script>
  import question from "../../stores/question";

  import Dropdown from "./_Dropdown.svelte";
  import MultiChoice from "./_MultiChoice.svelte";
  import FillIn from "./_FillIn.svelte";
  import ProgressBar from "./_components/_ProgressBar.svelte";
</script>

{#if $question.type === 'dropdown'}
  <Dropdown />
{:else if $question.type === 'multi_choice'}
  <MultiChoice />
{:else if $question.type === 'fill_in'}
  <FillIn />
{/if}
