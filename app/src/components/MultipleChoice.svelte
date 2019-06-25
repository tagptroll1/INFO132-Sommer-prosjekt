<script>

import { choicesStore } from "../stores/choices.js";

export let currentChoices;

</script>

<style>

button {
		outline: none;
		font-size: 20px;
		display:inline-block;
		padding:0.35em 1.2em;
		border:0.1em solid #FFFFFF;
		margin:0 0.3em 0.3em 0;
		border-radius:0.12em;
		box-sizing: border-box;
		text-decoration:none;
		font-family:'Roboto',sans-serif;
		font-weight:300;
		color:#FFFFFF;
		text-align:center;
		transition: all 0.15s;
		background-color: transparent;
	}

	button:hover {
		color:#000000;
		background-color: #FFFFFF;
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
			{#each currentChoices["alternatives"] as alternative}
				<li>
					<button>{alternative}</button>
				</li>
			{/each}
		</ul>
</div>