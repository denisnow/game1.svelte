import { writable, derived } from 'svelte/store';
import makeMatrix from './helpers/makeMatrix.js';

export const matrix = writable(makeMatrix());

// ========== MAKING ARRAY CONTAINING TILE POSITIONS ==========

export const positions = derived( matrix, $matrix => {
    let positions = [];

    for (let i = 0; i < 4; i++)
        for (let j = 0; j < 4; j++)
            positions[$matrix[i][j]] = {m:i, n:j};
    return positions;
} );

// ============ CHECKING IF THE BOARD IS SORTED ===============

export const isSorted = derived( positions, $positions => {
    if ($positions[0].n === 3 && $positions[0].m === 3) {
        for (let i = 15; i > 1; i--) {
            let m = Math.floor((i - 1) / 4),   // target position of tile
                n = i - 1 - 4*m;

            if ($positions[i].m !== m || $positions[i].n !== n) return false;
        }
        return true;
    }
    else return false;
} );

// ===== MAKING ARRAY CONTAINING TILE RESPONSIVITY STATES =====

export const respStates = derived( [positions, isSorted], ([$positions, $isSorted]) => {
    let respStates = [];

    if (!$isSorted) for (let i = 1; i <= 15; i++) {
        respStates[i] = $positions[i].n === $positions[0].n || $positions[i].m === $positions[0].m;
    }
    else for (let i = 1; i <= 15; i++) respStates[i] = false;
    return respStates;
} );

// ============ MAKING ARRAY CONTAINING TABINDEXES ============

export const tabIndexes = derived( [positions, respStates, isSorted], ([$positions, $respStates, $isSorted]) => {
    let tabIndexes = [];

    if (!$isSorted) for (let i = 1; i <= 15; i++) {
        if ($respStates[i]) tabIndexes[i] = 4*$positions[i].m + $positions[i].n + 1;
        else tabIndexes[i] = -1;
    }
    else for (let i = 1; i <= 15; i++) tabIndexes[i] = -1;
    return tabIndexes;
} );
