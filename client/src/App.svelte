<script>
	export let question = "Hva printer denne kodesnutten? \n tall = [0, 2, 3, 8, 9]\n for i in tall:\n \tif i % 2 == 0:\n\t\tprint(i, end=” “)"
	export let answer = "b. 0 2 8"
	export let choices = ["a. 3 9", "b. 0 2 8", "c. ingenting", "d. 2 8"]	

	
	function clickHandler(event) {
		if (event.toElement.innerText == answer) {
			console.log("correct")
		}
	}


</script>

<style>
	h1 {
		color: aquamarine;
	}

	#question {
		white-space: pre-wrap;
	}

	button {
		font-size: 30px;
	}



	



</style>



<div id ="multiple_choice"> 
	<h1>Multiple Choice</h1>
	
	<h2 id="question">{question}</h2>

	<ul>
		{#each choices as choice} 
			<li id="choice">
				<button on:click={clickHandler}>{choice}</button>
			</li>
		{/each}
	</ul>


</div>
