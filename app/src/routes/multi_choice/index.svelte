
<script context="module">

	// Fetches multichoice questions from the server
	export function preload() {
		return this.fetch("http://127.0.0.1:5000/multichoice").then(r => r.json()).then(data => {
			return { data };
		});
	}
</script>
	

<script>

	export let data;

	import { questionStore } from "../../questionStore";

	// Storing the questions to be presented in a global Svelte store
	for (let i = 0; i < data.length; i++) {
		$questionStore[i] = data[i];
	}
	console.log($questionStore)

	// Quiz logic variables

	let currentQuestion = 0;


	import ProgressBar from "../../components/ProgressBar.svelte";
	import MultipleChoiceAlternatives from "../../components/MultipleChoiceAlternatives.svelte";
	import QuestionText from "../../components/QuestionText.svelte";
	import Codeblock from "../../components/Codeblock.svelte";
	


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


</style>


	
<h1>Spørsmål 1</h1>


<QuestionText currentQuestion={$questionStore[currentQuestion]}/>
<Codeblock> { $questionStore[currentQuestion]["question_codesnippet"] }</Codeblock>
<MultipleChoiceAlternatives currentQuestion={$questionStore[currentQuestion]}/>

