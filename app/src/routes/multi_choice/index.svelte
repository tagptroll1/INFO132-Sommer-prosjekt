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
</script>

<style>

</style>

<h1>Multichoice</h1>
