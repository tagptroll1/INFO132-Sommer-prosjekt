
<script>
	import Codeblock from "../../components/Codeblock.svelte";

	export let full_question = "Hva printer denne kodesnutten? \n´´´ tall = [0, 2, 3, 8, 9]\n for i in tall:\n \tif i % 2 == 0:\n\t\tprint(i, end=” “)´´´".split("´´´")
	export let question = full_question[0]
	export let code_snippet = full_question[1]

	export let answer = "b. 0 2 8"
	export let choices = ["a. 3 9", "b. 0 2 8", "c. ingenting", "d. 2 8"]	

	export let hint = "Modulo operatoren er brukt til å finne resten av et opprinnelig heltall etter en divisjon med et annet tall" + 
	". For eksempel vil 7 mod 3 gi en rest av heltallet på 7 - (2*3) = 1, mens 9 mod 3 gir en rest på 9 - (3*3) = 0."


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
	p{
		font-size: 1.2em;
	}
	pre{
		color: var(--color1);
		background: var(--bg3);
		padding: 10px;
		border-radius: 10px;
	}
	ul{
		padding: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	li{
		list-style: none;
	}
	button{
		border: unset;
		background-color: unset;
	}

</style>


	
<h1>Spm 1</h1>
<p>{question}</p>

<Codeblock>{code_snippet}</Codeblock>

<ul id="choices">
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

<p id="hint">{hint}</p>
