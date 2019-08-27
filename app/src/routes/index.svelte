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
  let value = '';


  function handleEnter(event){
    let key = event.key || event.keyCode;
    if((key === 13 || key === "Enter") && input.checkValidity()){
      event.preventDefault();

      start();
    }
  }

  function start(){
    if(input.checkValidity()){
      $user = input.value;
      
      goto("/question");

    } else {
      value = '';
    }
  }
</script>
<style>
  .outer{
    color: var(--color-main);
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: hsla(0, 0%, 77%, 0.6);
    padding: 20px 30px;
  }

  h1 {
    text-align: center;
    font-weight: 300;
    font-size: 3.2em;
    margin-top: 30px;
  }

  .start {
    border: none;
    cursor: pointer;

    text-decoration: none;
    padding: 10px 25px;
    margin: 30px;
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

  input{
    border: none;
    border-bottom: 4px solid;
    height: 1.5em;
    font-size: 1.2em;
    text-align: center;
  }
  input::placeholder{
    opacity: .3;
  }
  input:valid{
    border-color: hsl(120, 100%, 70%);
  }
  input:invalid{
    border-color: hsl(7, 100%, 70%);

    box-shadow: none;
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

  .inpblock{
    display: flex;
    flex-direction: column;
  }

  .inpblock span{
    text-align: center;
    margin: 5px;
  }

</style>
<figure>
  <Logo />
</figure>

<div class="outer">
  <h1>UiB Python</h1>

  <div class="inpblock">

    <span>Please enter your UIB Username <br>(or leave blank to stay anonymous):</span>
    <input 
      {pattern} 
      placeholder="ex; pat123" 
      bind:this={input} 
      bind:value
      on:keydown={handleEnter}
    >
  </div>

  <button
    class="start" 
    on:click={start}
  >Start as {value ? value : 'anonymous'}</button>

</div>

