var mas = [];
var k = 0;
var n;
for (let i = 0; i < 5; i++) {
    mas[i]=[];
    for (let j = 0; j < 5; j++) {
        k = -i;
        n = k + (j+1);
        if (n <= 0){
            n = 0;
        }
        else{
            n = n;
        }mas[i][j] = n;
    }
}
console.log(mas);