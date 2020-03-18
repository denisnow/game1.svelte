import { writable, derived } from 'svelte/store';
import makeMatrix from './makeMatrix.js';
import moveTiles from './moveTiles.js';

const matrix = writable(makeMatrix());

export const positions = derived( matrix, $matrix => {
    let positions = [];

    for (let i = 0; i < 4; i++)
        for (let j = 0; j < 4; j++)
            positions[$matrix[i][j]] = {m:i, n:j};
    return positions;
} );

// ==================== MOVING TILES ====================

export const clickedTilePosition = writable(undefined);

clickedTilePosition.subscribe( position => {
    if (position) matrix.update( matrix => moveTiles(matrix, position) );
} );

// ================= CHECKING IS SORTED =================

export const isSorted = derived( positions, $positions => {
    if ($positions[0].n === 3 && $positions[0].m === 3) {
        for (let i = 15; i > 0; i--) {
            let m = Math.floor((i - 1) / 4),   // target position of tale
                n = i - 1 - (m * 4);

            if ($positions[i].m !== m || $positions[i].n !== n) return false;
            if (i === 1) return true;
        }
    }
    else return false;
} ); 

// ===================== SHUFFLING ======================

export const shuffleBtnState = writable({isVisible: false, isClicked: false});

isSorted.subscribe( isSorted => {
    if (isSorted) shuffleBtnState.set({isVisible: true, isClicked: false});
} );

shuffleBtnState.subscribe( ({isClicked}) => {
    if (isClicked) {
        matrix.set(makeMatrix());
        shuffleBtnState.set({isVisible: false, isClicked: false});
    }
} );
