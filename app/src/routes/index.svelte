<script>
  import Logo from "../components/LogoUIB.svelte";

  import user from "../stores/user.js";
  import index from "../stores/index";
  import questions from "../stores/questions";

  $index = 0;
  $questions = [];

  const pattern = `[a-zA-ZæøåÆØÅ]{3}\\d{3}`;
  const placeholder = `username ex; abc123`;

  let input;
  let anon = false;

  function handleStart(){
      if((input.checkValidity() && input.value.length) || anon){
        $user = input.value
      }
  }

</script>

<style>
  nav {
    display: flex;
    justify-content: space-evenly;
  }
  article{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a,
  h1 {
    color: var(--color-main);
  }
  h1 {
    text-align: center;
    font-weight: 300;
    font-size: 3.2em;
  }
  a {
    text-decoration: none;
    padding: 10px 25px;
    margin: 0 5px;
    color: var(--bg-main);
    background-color: var(--bg-focus);
    border-radius: 8px 4px;

    position: relative;
  }
  a::after {
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
  a:focus::after,
  a:hover::after {
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
  }

  div input:valid{
    border-color: rgb(58, 141, 58);
  }
  div input:invalid{
    border-color: rgb(231, 45, 45);
  }
  div span{
    visibility: hidden;
    
  }
  div input:not([value=""]):valid+span{
    visibility: visible;
  }
</style>

<article>
  <h1>UiB Python</h1>

  <span></span>
  <div>
    <input {pattern} {placeholder} bind:this={input}/>
    <span>👌</span>
  </div>

  <nav>
    <a href="/question" on:click={handleStart}>Start</a>
  </nav>
</article>

<figure>
  <Logo />
</figure>
