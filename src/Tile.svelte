<script>
    import { afterUpdate } from 'svelte';
    import { positions, isSorted } from './model/stores.js';
    import { move } from './model/actions.js';

    export let number;

    let tileWrapperElement;

    const tileClickHandler = () => {
        if (tileWrapperElement.classList.contains('clickable')) move($positions[number]);
    };

    $: isClickable = $positions[number].n === $positions[0].n || $positions[number].m === $positions[0].m;

    afterUpdate( () => {
        tileWrapperElement.style.transform = 'translate(' + $positions[number].n*100 + '%, ' + $positions[number].m*100 + '%)';
    } );
</script>

<div class='tileWrapper{isClickable && !$isSorted ? " clickable" : ""}' bind:this={tileWrapperElement}>
    <div class='tile' on:click={tileClickHandler}>
        {number}
    </div>
</div>
