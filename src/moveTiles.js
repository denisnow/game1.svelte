export default function moveTiles(matrix, position) {  // position - position of clicked tile = {m, n}
    const amountOfTiles = Math.abs(position.m-matrix.void.m || position.n-matrix.void.n);

    function moveTilesUp() {
        for (let i = matrix.void.m + 1; i <= position.m; i++)
            matrix[i-1][matrix.void.n] = matrix[i][matrix.void.n];
        matrix.void.m += amountOfTiles;
    }

    function moveTilesDown() {
        for (let i = matrix.void.m - 1; i >= position.m; i--) 
            matrix[i+1][matrix.void.n] = matrix[i][matrix.void.n];
        matrix.void.m -= amountOfTiles;
    }

    function moveTilesToTheRight() {
        for (let i = matrix.void.n - 1; i >= position.n; i--) 
            matrix[matrix.void.m][i+1] = matrix[matrix.void.m][i];
        matrix.void.n -= amountOfTiles;
    }

    function moveTilesToTheLeft() {
        for (let i = matrix.void.n + 1; i <= position.n; i++) 
            matrix[matrix.void.m][i-1] = matrix[matrix.void.m][i];
        matrix.void.n += amountOfTiles;
    }
    
    if (position.m !== matrix.void.m) {
        if (position.m > matrix.void.m) moveTilesUp();
        else moveTilesDown();
    }
    else {
        if (position.n < matrix.void.n) moveTilesToTheRight();
        else moveTilesToTheLeft();
    }
    matrix[matrix.void.m][matrix.void.n] = 0;
    return matrix;
}
