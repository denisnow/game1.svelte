<script>
    import tabIndexSetter from './tabIndexSetter.js';

    export let number, isMovable, tabIndex, translationX, translationY;
</script>

<div
    class='tileWrapper'
    style='transform:translate({translationX}%, {translationY}%)'
>
    <div
        class='tile'
        class:responsive={isMovable}
        use:tabIndexSetter={tabIndex}
    >
        {number}
    </div>
</div>
