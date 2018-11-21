function matrix (rows , colons){
    let mas = [],
        n = 100, // Zadaem predel znacheniu
        max = 0,
        min = n ,
        random;

    for (let i = 0; i < colons; i++) {
        mas[i] = [];
        for (let j = 0; j < rows; j++) {
            random = Math.floor(Math.random(rows * colons)*n)
            mas[i][j] = random;

            if (random >= max) max = random;
            else if (random <= min) min = random;

        }
    }
    console.log("Minimal'noe znachenie: %d \nMaksimal'noe znachenie: %d", max, min);
    return mas;
}
console.log(matrix(5,3));
