<script>
	import LetterTile from "./components/LetterTile.svelte";
	import { tileBag } from "./data/tileBag";
</script>


<main>
	{#each $tileBag as { letter }}
		<LetterTile {letter}/>
	{/each}
	
	<button on:click={(e) => tileBag.removeTile("X")}>REMOVE A "X" TILE</button>
	<button on:click={(e) => tileBag.removeTile("Y")}>REMOVE A "Y" TILE</button>
	<button on:click={(e) => tileBag.removeTile("Z")}>REMOVE A "Z" TILE</button>
</main>


<style>
	
</style>