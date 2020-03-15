import { writable } from 'svelte/store';
import makeMatrix from './makeMatrix.js';

export const matrix = writable(makeMatrix());