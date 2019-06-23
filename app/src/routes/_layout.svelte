<script>
export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 60%;
		min-height: 100vh;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<main>
	<slot></slot>
</main>