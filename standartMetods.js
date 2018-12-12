class array {
    constructor() {
        this.i = 0;
        this.a = [];
    }


    addFirst(znach) {
        this.a[this.i] = znach;
        this.i++;
        if (this.a.length > 1) {
            znach = this.a[this.a.length - 1];
            for (let i = this.a.length - 1; i > 0; --i) this.a[i] = this.a[i - 1];
            this.a[0] = znach;
        }
    }


    anyPlace(znach, place) { //ставит значение на место и двигает все остальные значения на 1 вперед

        if (place < 0 || place > this.a[this.a.length]) {
            console.log('You can not put your znach = %d on the place = %d  in array with length = %d', znach, place, this.a.length)
        }
        else {
            this.a[this.i] = znach;
            this.i++;
            znach = this.a[this.a.length - 1];
            for (let i = this.a.length - 1; i > place; --i) this.a[i] = this.a[i - 1];
            this.a[place] = znach;
        }
        //или можно не двигать значения а просто заменять их
        // if{
        //     this.a[place] = znach;
        //     console.log('Good =)')
        // }
    }


    allDelete() {
        this.a.fill(undefined,this.a.length);
    }


    placeDelete(place) {

        if (place < 0 || place > this.a[this.a.length]) {
            console.log('You can not delete place = %d in array with length = %d', place, this.a.length)
        }
        else {
            delete this.a[place];
            for (let i = place; i < this.a.length - 1; i++) this.a[i] = this.a[i + 1];
            delete this.a[this.a.length - 1];
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

massiv.anyPlace(8, 2 )


// massiv.placeDelete(3)
 massiv.allDelete()



console.log(massiv.a)


