<script>
    import Tile from './Tile.svelte';
    import { positions, respStates, tabIndexes } from './model/stores.js';

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
</script>

{#each numbers as number}
    <Tile
        {number}
        isMovable={$respStates[number]}
        tabIndex={$tabIndexes[number]}
        positionN={$positions[number].n}
        positionM={$positions[number].m}
    />
{/each}
