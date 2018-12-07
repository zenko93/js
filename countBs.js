function countChar(a , ch) {
    let n = 0;
    let count = 0;

    for (let i = 0; i < a.length ; i++) {
        if (a[i] === ch){
            count += 1;
        }
    }
    return count;
}
function countBs(a){
    return countChar(a, 'B')
}
console.log(countBs('BaBaB'));