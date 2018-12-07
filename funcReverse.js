function argumentMasReverse() {
    let mas = [];
    for (let i = arguments.length - 1 ; i >= 0; i --)mas.push(arguments[i]);
    return mas;
    }

console.log(argumentMasReverse('a','b','c'));

////////////////////////////////////////////////////////

function argumentMasReverse1(reverse) {
    let mas = [];
    for (let i = reverse.length-1 ; i >= 0; i --)mas.push(reverse[i]);
    return mas;
}

var reverse = [5,4,3,2,1];
console.log(argumentMasReverse1(reverse));

////////////////////////////////////////////////////////

function argumentMasReverse2(reverse) {
    let mas = [];

    for (let i = 0; i < Math.floor(reverse.length / 2); i++){ //как тут устроено?
        mas = reverse[i];
        reverse[i]= reverse[reverse.length - 1 - i];
        reverse[reverse.length - 1 - i] = mas;
    }
    return reverse;
}

var reversing = [5,3,1,'b'];
argumentMasReverse2(reversing)
console.log(reversing);