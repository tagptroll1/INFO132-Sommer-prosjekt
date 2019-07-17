<script>
export let currentQuestion;
</script>

<style>
button {
		outline: none;
		font-size: 20px;
		display:inline-block;
		padding:0.35em 1.2em;
		border:0.1em solid rgb(0, 0, 0);
		margin:0 0.3em 0.3em 0;
		border-radius:0.12em;
		box-sizing: border-box;
		text-decoration:none;
		font-family:'Roboto',sans-serif;
		font-weight:300;
		color:rgb(0, 0, 0);
		text-align:center;
		transition: all 0.15s;
		background-color: transparent;
	}
	button:hover {
		color:#FFFFFF;
		background-color: rgb(0, 0, 0);
	}
	#choices {
		padding: 40px;
	}
	li {
		list-style: none;
	}
</style>


<div id="choices">
		<ul>
			{#each currentQuestion["alternatives"] as alternative}
				<li>
					<button> {alternative} </button>
				</li>
			{/each}
		</ul>
</div>