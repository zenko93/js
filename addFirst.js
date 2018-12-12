class array {
    constructor(){
        this.i = 0;
        this.a = [];
    }
    addFirst(znach){
        this.a[this.i] = znach;
        this.i ++;
    if ( this.a.length > 1 ) {
        znach = this.a[this.a.length - 1];
        for (let i = this.a.length - 1; i > 0; --i) this.a[i] = this.a[i - 1];
        this.a[0] = znach;
    }
}
}
let massiv = new array();

massiv.addFirst(44)
massiv.addFirst(55)
massiv.addFirst(33)
massiv.addFirst(1)
massiv.addFirst(-2)
massiv.addFirst(-6)

console.log(massiv.a)


