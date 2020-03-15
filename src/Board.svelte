<script>
    import Tale from './Tale.svelte';
    import { matrix } from './stores.js';

    let positions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    $: {
        for (let i = 0; i < 4; i++)
            for (let j = 0; j < 4; j++) positions[$matrix[i][j]] = {m:i, n:j};
    }
</script>

{#each positions as position, number}
    {#if number}
        <Tale {number} {position}/>
    {/if}
{/each}