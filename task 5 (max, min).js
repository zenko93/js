function matrix (rows , colons){
    let mas = [],
        n = 100, // Zadaem predel znacheniu
        max = 0,
        min = n,
        random;

    for (let i = 0; i < rows; i++) {
        mas[i] = [];
        for (let j = 0; j < colons; j++) {
            random = Math.floor(Math.random(rows * colons)*n)
            mas[i][j] = random;

            if (random >= max) max = random;
            else if (random <= min) min = random;

        }
    }
    console.log("Minimal'noe znachenie: %d \nMaksimal'noe znachenie: %d", min, max);
    return mas;
}
console.log(matrix(7,2));
