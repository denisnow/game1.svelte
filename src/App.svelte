<script>
	import { isSorted } from './model/stores.js';
	import { shuffle } from './model/actions.js';
	import Board from './Board.svelte';

	const ESCAPE_KEY = 27;

	let isAboutVisible = false;

	const toggleAboutVisibility = () => isAboutVisible = !isAboutVisible;

	const bodyKeyDownHandler = event => {
		if (isAboutVisible && event.which === ESCAPE_KEY) toggleAboutVisibility();
	}
</script>

<svelte:body on:keydown={bodyKeyDownHandler}/>

<h1 class='visuallyHidden'>The 15-puzzle game</h1>

{#if !isAboutVisible}
	<section class='board'>
		<h2 class='visuallyHidden'>The game board</h2>
		<button class='shuffleBtn{$isSorted ? "" : " hidden"}' title='Shuffle the tiles' on:click={shuffle}>
			<span class='visuallyHidden'>Shuffle</span>
		</button>
		<button class='openAboutBtn' title='Display information about the game' on:click={toggleAboutVisibility}>
			<span class='visuallyHidden'>Information</span>
		</button>

		<Board/>
	</section>
{:else}
	<section class='textArea about'>
		<h2 class='visuallyHidden'>Information about the game</h2>
		<button class='closeAboutBtn' title='Return to the game board' on:click={toggleAboutVisibility}>
			<span class='visuallyHidden'>Close</span>
		</button>
		<div class='textWrapper'>
			<div class='textContainer'>
				<h3>Rules</h3>
				<p>Place the tiles in ascending order.</p>
				<h3>Hints</h3>
				<p>Sort the first two rows, then place the «9» and the «13» tile on their destination places, finally sort remaining tiles.</p>
			</div>
		</div>
	</section>
{/if}
