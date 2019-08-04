<script>
	import Logo from '../components/LogoUIB.svelte';
</script>
<style>

	nav{
		display: flex;
		justify-content: space-evenly;
	}

	a,h1{
		color: var(--color-main);
	}
	h1{
		text-align: center;
		font-weight: 300;
		font-size: 3.2em;
	}
	a{
		text-decoration: none;
		padding: 10px 25px;
		margin: 0 5px;
		/* yes you can use a background as a foreground */
		color: var(--bg-main);
		background-color: var(--bg-focus);
		border-radius: 8px 4px;

		position: relative;
	}
	a::after{
		content: '';
		display: block;
		position: absolute;
		left: 0; right: 0;
		margin: 0 auto;
		width: 0;
		height: 3px;
		border-radius: 1000px;
		background-color: var(--bg-main);

		transition: width .3s ease;
	}
	a:focus::after,a:hover::after{
		width: 25%;
	}
	/* a:visited,
	a:active{
					do we really care about this? ...no
					...anyway ... i googled "BEST SONG EVER"
					this did not show up in the results...
					https://www.youtube.com/watch?v=tA7a_EEgwrw
					..it should tho..
	} */

	figure{
		position: fixed;
		z-index: -1;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		width: 100vw;
	}

</style>

<!-- just.... read about the article / section tags ...  -->
<article>
	<h1>UiB Python</h1>
	<!-- NOT a wrapper .....!!! -->
	<!-- 
		it's ONLY here for the semantics 
		we can remove it (no biggie)...
		but if we want more links then ..this...

		...also we do not put an ul in a nav and li in the ul 
		that would just be silly...
		
		.. and we are not silly are we?
	 -->
	<nav>
		<a href="/question/1">Start</a>
	</nav>
</article>

<!-- BY THE WAY -->

<!-- 
	if all you want is that one clickable linky 
	then this is even more correct 

	- nav
		- h1 - some dum title
		- a - some link with some text 
	DO NOT.-> wrap the A around the H1 
 -->

<figure>
	<Logo/>
</figure>