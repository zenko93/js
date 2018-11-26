function spiral (rows, colons){
    let mas = [],
        smesh = 0,
        t = 1;

    for (let i = 0; i < rows ; i++) {
        mas[i]=[];
        for (let j = 0; j < colons; j++) {
            mas[i][j] = 0;

        }
    }

    while (smesh < (rows/2) && (colons/2)) {

        for (let i = 0; i <= rows - 1; i++) { // zapolnyaem verh
            mas[smesh][smesh + i] = t;
            t++;
        }
        for (let i = 0; i < rows - 2; i++) {   // zapolnyaem sprava
            mas[1+smesh+i][colons-1-smesh] = t ;
            t++;
        }
        for (let i = colons - 1; i >= 0 ; i--) {   // zapolnyaem snizy
            mas[rows - 1 - smesh][i + smesh] = t;
            t++;
        }
        for (let i = rows - 2 ; i > 0 ; i--) {  // zapolnyaem sleva
            mas[i - smesh][smesh]= t;
            t++;
        }
        smesh++;
        rows-=2;
        colons-=2;
    }
    return mas;

}
console.log(spiral(5,5));