<script>
    import Tale from './Tale.svelte';
    import { matrix } from './stores.js';

    let numbers = [];

    $: {
        for (let i = 0; i < 4; i++)
            for (let j = 0; j < 4; j++) numbers.push($matrix[i][j]);
    }
</script>

{#each numbers as number, index}
    {#if number}
        <Tale {number} {index}/>
    {/if}
{/each}