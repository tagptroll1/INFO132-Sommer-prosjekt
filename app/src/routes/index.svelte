<script>
  import { goto } from "@sapper/app"
  import Logo from "../components/LogoUIB.svelte";

  import user from "../stores/user.js";
  import index from "../stores/index";
  import questions from "../stores/questions";

  $index = 0;
  $questions = [];

  const pattern = `[a-zA-ZæøåÆØÅ]{3}\\d{3}`;

  let input;
  let anon = false;

  function handleStart(){
      if((input.checkValidity() && input.value.length) || anon){
        $user = input.value
      }
  }
  function handleEnter(event){
    let key = event.key || event.keyCode;
    if(key === 13 || key === "Enter"){
      event.preventDefault();
      handleStart();
      goto("/question");
    }
  }

</script>

<article>
  <h1>UiB Python</h1>

    <label for="inp" style="text-align: center;">Please enter your UIB Username:</label>
  <div>
    <input 
      {pattern} 
      placeholder="here" 
      bind:this={input} 
      on:keydown={handleEnter}
      autofocus

      />
  </div>

  <a class="start" href="/question" on:click={handleStart}>Start</a>
</article>

<figure>
  <Logo />
</figure>

<style>
  article{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .start,
  h1 {
    color: var(--color-main);
  }
  h1 {
    text-align: center;
    font-weight: 300;
    font-size: 3.2em;
  }

  .start {
    text-decoration: none;
    padding: 10px 25px;
    margin: 0 5px;
    color: var(--bg-main);
    background-color: var(--bg-focus);
    border-radius: 8px 4px;

    position: relative;
  }
  .start::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 0;
    height: 3px;
    border-radius: 1000px;
    background-color: var(--bg-main);

    transition: width 0.1s ease;
  }
  .start:focus::after,
  .start:hover::after {
    width: calc(100% - 50px);
  }

  figure {
    position: fixed;
    z-index: -1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100vw;
  }

  label{
    margin-bottom: 10px;
  }

  div{
    display: flex;
  }
  div input{
    border: none;
    background-color: inherit;
    border-bottom: 2px solid;
    box-shadow: none;

    margin-bottom: 20px;

    font-family: var(--font-main);
    font-size: 1em;
    text-align: center;
    width: 55px;
  }

  div input:valid{
    border-color: rgb(58, 141, 58);
  }
  div input:invalid{
    border-color: rgb(231, 45, 45);
  }

</style>