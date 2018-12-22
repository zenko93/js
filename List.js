
class list {

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }


    add(plus) {
        let node = new Node(plus);

        if (this.head == null) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }


    addInPos(znach, index) {
        let count = 0;
        let current = this.head;
        let previous = null;

        if (this.granici(index) === true) {
            while (current != null) {
                if (count === index) {
                    if (previous != null) {
                        let neo = new Node(znach);
                        previous.next = neo;
                        neo.next = current;
                        this.size++;
                    }
                    else {
                        let neo = new Node(znach);
                        this.head = neo;
                        this.head.next = current;
                        this.size++;
                    }
                }
                previous = current;
                current = current.next;
                count++;
            }
        }
    }


    addFirst(znach) {
        this.addInPos(znach, 0);
    }


    removeAll() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }


    removeByPos(position) {
        let count = 0;
        let current = this.head;
        let previous = null;

        while (current != null) {
            if (count === position) {
                if (previous != null) {
                    previous.next = current.next;

                    if (current.next == null) {
                        this.tail = previous;
                    }
                }
                else {
                    this.head = this.head.next;

                    if (this.head == null) {
                        this.tail = null;
                        this.size = 0;
                    }
                }
                this.size--;
            }
            previous = current;
            current = current.next;
            count++;
        }
    }


    granici(idx) {
        if (idx < 0 || idx > this.size || this.size === 0) {
            console.log('Invalid index = %d in array length = %d', idx, this.size);
            return false;
        }
        else {
            return true;
        }

    }

    logMetod() {
        let current = this.head;
        let pool = '';

        while (current != null) {
            pool += current.value + " -> ";
            current = current.next;
        }
        console.log(pool + 'null')
        console.log("Size = " + this.size)
    }
}


class Node{
    constructor(value, next){
        this.value = value;
        this.next = null;
    }
}

puk = new list()


puk.addInPos(9,0)
puk.add(1)
puk.add(2)
puk.add(3)

puk.logMetod()




