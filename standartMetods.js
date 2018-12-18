class array {
    constructor() {
        this.i = 0;
        this.a = [];
    }

    addFirst(znach) {
        this.addInPos(znach, 0);
    }

    add(elem) {
        this.a[this.i] = elem;
        this.i++;
    }

    addInPos(znach, idx) { //ставит значение на место и двигает все остальные значения на 1 вперед

        if(this.granici(idx) === true){
            this.add(znach);
            znach = this.a[this.i - 1];
            for (let k = this.i - 1; k > idx; --k) this.a[k] = this.a[k - 1];
            this.a[idx] = znach;
        }
    }


    removeAll() {
        this.a = []
    }


    removeByPos(place) {
        if(this.granici(place) === true){
            for (let j = place; j < this.i - 1; j++) this.a[j] = this.a[j + 1];
            this.i--;
        }
    }

    logMetod (){
        for (let i = 0; i < this.i ; i++) {
            console.log(this.a[i]);
        }
    }

    granici (idx){
        if (idx < 0 || idx > this.i) {
            console.log('Invalid index = %d in array length = %d', idx, this.i)
            return false;
        }
        else{
            return true;
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

massiv.addInPos(8,3)

massiv.removeByPos(100)
massiv.removeByPos(0)
massiv.removeByPos(0)
massiv.removeByPos(0)

 // massiv.allDelete()
massiv.add(5)

massiv.logMetod()
// massiv.addFirst(44)


console.log(massiv.a)


