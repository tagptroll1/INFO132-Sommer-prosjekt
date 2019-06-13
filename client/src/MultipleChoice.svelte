
<script>

	export let full_question = "Hva printer denne kodesnutten? ´´´\n tall = [0, 2, 3, 8, 9]\n for i in tall:\n \tif i % 2 == 0:\n\t\tprint(i, end=” “)´´´".split("´´´")
	export let question = full_question[0]
	export let code_snippet = full_question[1]

	export let answer = "b. 0 2 8"
	export let choices = ["a. 3 9", "b. 0 2 8", "c. ingenting", "d. 2 8"]	

	export let hint = "Modulo operatoren er brukt til å finne resten av et opprinnelig heltall etter en divisjon med et annet tall" + 
	". For eksempel vil 7 mod 3 gi en rest av heltallet på 7 - (2*3) = 1, mens 9 mod 3 gir en rest på 9 - (3*3) = 0."


	let render = false;

	// Function that handles the choice a user makes
	function clickHandler(event) {
		if (event.toElement.innerText == answer) {
			event.target.style.background = "LawnGreen";
			// Do more stuff..
		} else {
			event.target.style.background = "red";
			document.getElementById("correct").style.background = "LawnGreen";
			//HINT
			// Give a hint, explanation..
		}
	}

	
</script>


<style>

	/* Flex-container */
	#multiple_choice-wrapper {
		width: 100%;
    	height: 500px;
		display: flex;
		flex-direction: column;
    	align-items: center;
    	justify-content: center;
    }


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

	code {
		white-space: pre-wrap;
	}

	#choices {
		padding: 40px;
	}

	li {
		list-style: none;
	}

</style>


<div id ="multiple_choice-wrapper"> 
	
	<h2>{question}</h2>
	<pre><code>{code_snippet}</code></pre>

	
	<div id="choices">
		<ul>
			{#each choices as choice} 
				<li>
					{#if choice == answer}
					<button id="correct" on:click={clickHandler}>{choice}</button>
					{:else}
					<button on:click={clickHandler}>{choice}</button>
					{/if}
				</li>
			{/each}
		</ul>
	</div>

	<div id="hint">
		<p>{hint}</p>
	</div>
</div>
