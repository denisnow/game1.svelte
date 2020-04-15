<script>
    import tabIndexSetter from './tabIndexSetter.js';

    export let number, isMovable, tabIndex, translateX, translateY;
</script>

<div
    class='tileWrapper'
    style='transform:translate({translateX}%, {translateY}%)'
>
    <div
        class='tile'
        class:responsive={isMovable}
        use:tabIndexSetter={tabIndex}
    >
        {number}
    </div>
</div>
