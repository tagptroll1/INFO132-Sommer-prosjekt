<script>
  import questions from "../../../stores/questions";
  import question from "../../../stores/question";
  import index from "../../../stores/index";
  import user from "../../../stores/user";

  $: selected = $question.answer && $question.answer.selected_answer;

  function handleClick(option) {
    selected = option;

    const correct = selected === $question.question_answer;

    $questions[$index].answer = {
      user: $user,
      question_id: $question._id,
      selected_answer: selected,
      correct: correct,
      ended_question: new Date(Date.now()).toString()
    };

    const dispatch_obj = {
      selected: option,
      correct: selected === $question.question_answer
    };
  }
</script>

<style>
  button {
    cursor: pointer;

    outline: none;
    font-size: 20px;

    padding: 0.35em 1.2em;
    margin: 0 0.3em 0.3em 0;

    display: block;
    width: 100%;

    box-sizing: border-box;
    text-decoration: none;
    font-family: var(--code);
    font-weight: 300;
    text-align: center;
    transition: all 0.15s;
    
    color: rgb(221, 221, 221);
    background-color: rgb(47, 47, 47);    

    border: none;
  }
  button:hover {
    color: #ffffff;
    background-color: black;
  }
  #choices {
    padding: 40px;
  }
  li {
    list-style: none;
  }
  ul {
    margin: 0;
    padding: 0;
  }

  .selected {
    font-weight: bold;
    background-color: rgb(197, 197, 197);
    color: rgb(0, 0, 0);
  }
</style>

<div id="choices">
  <ul>
    {#each $question.alternatives as alternative}
      <li>
        <button
          class:selected={alternative === selected}
          on:click={() => handleClick(alternative)}>
          {alternative}
        </button>
      </li>
    {/each}
  </ul>
</div>
