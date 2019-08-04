<script>
export let segment;
</script>

<style>
	main {
		/* center with flexbox whooo*/
		display: flex;

		/* 
			this makes the two statements about alignment below still apply
			it's just that it now is such that you have to tilt your head 90 degrees
			to make it work mmmk?
			Tl;dr : u flip the axis, then horizontal = verticaL...ez pz.
		*/
		flex-direction: column;

		/* horizontaly yeeee*/
		justify-content: center;
		
		/* vertically weee*/
		align-items: center;
		
		/* sure why not...center is soo cool anyway... */
		min-height: 100vh;
	}
</style>
<main>
	<slot></slot>
</main>