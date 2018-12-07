// let n = 0;
// let m = 1;
// while (n < 8 && m < 8){
//     console.log('# '.repeat(8));
//     n+= 2;
//     console.log(' #'.repeat(8))
//     m++;
// }
//

let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}

console.log(board);