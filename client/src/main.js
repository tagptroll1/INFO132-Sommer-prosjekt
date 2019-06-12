import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		question: "Hva printer denne kodesnutten? \n tall = [0, 2, 3, 8, 9]\n for i in tall:\n \tif i % 2 == 0:\n\t\tprint(i, end=” “)"
		
	}
});

export default app;