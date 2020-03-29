<script>
    import { afterUpdate } from 'svelte';
    import { positions, isSorted } from './model/stores.js';
    import { move } from './model/actions.js';

    export let number;

    const ENTER_KEY = 13;
    const SPACE_KEY = 32;

    let tileWrapperElement;

    const moveTiles = () => move($positions[number]);

    const tileClickHandler = () => {
        if (tileWrapperElement.classList.contains('clickable')) moveTiles();
    };

    const tileKeyDownHandler = event => {
        if (event.which === ENTER_KEY || event.which === SPACE_KEY) moveTiles();
    };

    $: isClickable = $positions[number].n === $positions[0].n || $positions[number].m === $positions[0].m;

    afterUpdate( () => {
        if (isClickable) tileWrapperElement.firstChild.tabIndex = 4*$positions[number].m + $positions[number].n + 1;
        else if (tileWrapperElement.firstChild.tabIndex !== -1) tileWrapperElement.firstChild.removeAttribute('tabindex');
    } );
</script>

<div
    class:clickable={isClickable && !$isSorted}
    class='tileWrapper'
    style='transform:translate({$positions[number].n*100}%, {$positions[number].m*100}%)'
    bind:this={tileWrapperElement}
>
    <div class='tile' on:click={tileClickHandler} on:keydown={tileKeyDownHandler}>
        {number}
    </div>
</div>
