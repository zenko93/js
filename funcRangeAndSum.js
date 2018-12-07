function range1 (start, end, step = start < end ? 1 : - 1) {
    let mas = [];

    if (step > 0){
        for (let i = start; i <= end; i += step) mas.push(i);
    }
    else{
        for (let i = start; i >= end; i += step) mas.push(i);
    }
    return mas;
}
    console.log(range1(8, 3));


function sum1 (mas){
    let total = 0;
    for (let i of mas) {
        total += i;
    }
    return total;
}

 console.log(sum1(range1(1, 10, 2)));