function spiral (rows, colons){
    let mas = [];
    let t = 0;
    let y1 = 0;
    let y2 = colons;
    let x1 = 0;
    let x2 = rows;
    let per = 0;


    for (let i = 0; i < rows ; i++) {
        mas[i]=[];
        for (let j = 0; j < colons; j++) {
            mas[i][j]=0;

        }
    }
    // mas[0][25] = 1
while ( t < colons * rows ) {

    for (let i = y1; i < y2 && t < colons * rows; i++) {
        t++;
        mas[x1][i] = t;
    }
    x1++;
    for (let i = x1; i < x2 && t < colons * rows; i++) {
        t++;
        mas[i][y2 - 1] = t;
    }
    y2--;
    for (let i = y2 - 1; i >= y1 && t < colons * rows; i--) {
        t++;
        mas[x2 - 1][i] = t;
    }
    x2--;
    for (let i = x2; i > x1 && t < colons * rows; i--) {
        t++;
        mas[i - 1][y1] = t;
    }
    y1++;

}

    return mas;

}
console.log(spiral(5,3));