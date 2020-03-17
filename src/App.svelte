<script>
	import Board from './Board.svelte';
</script>

<h1 class="visuallyHidden">The 15-puzzle game</h1>

<section class="board">
    <h2 class="visuallyHidden">The game board</h2>
    <button class="shuffleBtn hidden" title="Shuffle the tiles">
		<span class="visuallyHidden">Shuffle</span>
	</button>
    <button class="openAboutBtn" title="Display information about the game">
		<span class="visuallyHidden">Information</span>
	</button>

    <Board/>
</section>
