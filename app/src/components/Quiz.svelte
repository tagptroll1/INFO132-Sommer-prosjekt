<script>

// This component is responsible for the quiz logic

import { choicesStore } from "../stores/choices";
import { questionStore } from "../stores/questions";

import MultipleChoice  from "./MultipleChoice.svelte";
import Question from "./Question.svelte";
import ProgressBar from "./ProgressBar.svelte";


async function getQuestions() {
    const response = await fetch("../questions.json");
    const jsonfile = await response.json();
     for (var i = 0; i < jsonfile.questions.length; i++) {
            $questionStore[i] = jsonfile.questions[i];
    }
}

async function getChoices() {
    const respone = await fetch("../choices.json");
    const jsonfile = await respone.json();
    for (var i = 0; i < jsonfile.choices.length; i++) {
        $choicesStore[i] = jsonfile.choices[i];
    }
}
const questions = getQuestions();
const choices = getChoices();


// Quiz logic

let questionID = 0;



function nextQuestion() {
    if (questionID < $questionStore.length - 1) {
        questionID++;
    } else {
        console.log("No more questions");
    }
}


</script>

<style>
    /* Flex-container */
	#quiz-wrapper {
		width: 100%;
    	height: 500px;
		display: flex;
		flex-direction: column;
    	align-items: center;
    	justify-content: center;
    }
    

</style>

<div id="quiz-wrapper"> 
    {#await choices}
        loading..
        {:then a}
        <Question currentQuestion={$questionStore[questionID]}/>        
        <MultipleChoice currentChoices={$choicesStore[questionID]}/>
        <ProgressBar/>
        

        {:catch error}
        {error}
    {/await}

    <button id="next" on:click={nextQuestion}>Neste spørsmål</button>

    
</div>