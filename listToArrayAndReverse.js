function arrayToList(array ) {
    let list = null;
    //    for (let i = 0 ; i <= array.length ; i++) {  почему он ведет наоборот?
    for (let i = array.length - 1 ; i >=0 ; i--) {
        list = {value : array[i], rest : list}
    }
    return list;
}
console.log(arrayToList([10,20]))



function listToArray(list) {
    let mas = [];

    for (let i = list; i ; i = i.rest) {
        mas.push(i.value);
    }
    return mas;
}
console.log(listToArray(arrayToList([10,20,30])))



function prepend(value, list) {
    return {value, rest : list}
}
console.log(prepend(10, prepend(20, null)));


function nth(list , number) {
    if (!list) return undefined;
    else if (number === 0) return list.value;
    else return nth(list.rest, number - 1);
}
console.log(nth(arrayToList([10,20,30]), 2 ));