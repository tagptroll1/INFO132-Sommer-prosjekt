<script>
  export let segment;
</script>

<style>
  main {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
</style>

<main>
  <slot />
</main>
