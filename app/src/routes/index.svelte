
<style>
	h1 {
		text-align: center;
        padding-top: 200px;
        color: black;
    }

    #button-wrapper {
        width: 100%;
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    

/* Reset */
    a {
        background: transparent;
        border: 0;
        padding: 0;
        cursor: pointer;
        outline: 0;
        -webkit-appearance: none;
    }

    /* Custom */
    a {
		display: inline-block;
		position: relative;
		padding: 20px 38px;
		margin: 0.2%;
		top: 0;
		font-size: 20px;
		font-family: "Open Sans", Helvetica;
		border-radius: 4px;
		border-bottom: 1px solid rgba( 28, 227, 125, 0.5 );
		background: #F3FFBD;
		color: #70C1B3;
		box-shadow: 0px 0px 0px rgba( 15, 165, 60, 0.1 );
		
		-webkit-transform: translateZ(0);
			-moz-transform: translateZ(0);
			-ms-transform: translateZ(0);
				transform: translateZ(0);
		
		-webkit-transition: all 0.2s ease;
			-moz-transition: all 0.2s ease;
			-ms-transition: all 0.2s ease;
				transition: all 0.2s ease;
    }

    a:hover {
		top: -10px;
		box-shadow: 0px 10px 10px rgba( 120, 165, 60, 0.2 );
		
		-webkit-transform: rotateX(20deg);
			-moz-transform: rotateX(20deg);
			-ms-transform: rotateX(20deg);
				transform: rotateX(20deg);
    }

    a:active {
		top: 0px;
		box-shadow: 0px 0px 0px rgba( 15, 165, 60, 0.0 );
		background: rgba( 20, 224, 133, 1 );

    }

</style>

<h1>SlangeUiB</h1>
<div id="button-wrapper">
	<a href="/multi_choice">Multiple Choice</a>
	<a href="/dropdown">Dropdown</a>
	<a href="/multi_choice">Code</a>
</div>

