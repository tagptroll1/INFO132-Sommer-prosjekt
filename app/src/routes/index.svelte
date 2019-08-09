<script>
  import Logo from "../components/LogoUIB.svelte";
  import NameField from "../components/NameField.svelte";
</script>

<style>
  nav {
    display: flex;
    justify-content: space-evenly;
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

    transition: width 0.3s ease;
  }
  a:focus::after,
  a:hover::after {
    width: 25%;
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

  :global(main) {
    justify-content: center;
  }
</style>

<article>
  <h1>UiB Python</h1>
  <NameField />
  <p</p>
  <nav>
    <a href="/question">Start</a>
  </nav>

</article>

<figure>
  <Logo />
</figure>
