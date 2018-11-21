function snake (rows, colons){
    let mas = [],
        x = y = 0,
        stepG = rows - 1,
        stepV = colons - 1;

    for (let i = 0; i < colons; i++) mas[i] = [];

    for (let i = 1; i <= (rows * colons) ; i++){
        mas[y][x] = i ;

        if (x === stepG && y === stepV) stepV--,stepG--;

        if(x >= y && x < stepG || (y - 1 === x && y === colons - stepV - 1)) x++; //napravo

        else if (y <= x && y < stepV)y++; // vniz

        else if (x <= y && x >= rows - stepG - 1)x--; //vlevo

        else if (y >= x && y >= colons - stepV )y--; //vverh
    }
    return mas;
    }

console.log (snake(5,5));
