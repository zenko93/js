
class list {

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
        this.previous = null;

    }


    add(plus) {
        this.node = new Node(plus);

        if (this.head == null) {
            this.head = this.node;
            this.tail = this.node;
        }
        else {
            this.tail.next = this.node;
            this.tail = this.node;
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
        if (idx < 0 || idx > this.size) {
            console.log('Invalid index = %d in array length = %d', idx, this.size);
            return false;
        }
        else {
            return true;
        }

    }

    logMetod() {
        let current = this.head;
        let pool = [];

        while (current != null) {
            pool.push(current.value);
            current = current.next;
        }
        console.log(pool.join(' -> ') + ' -> null')
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


puk.add(0)
puk.add(1)

puk.add(2)
puk.add(3)
puk.addInPos(6,3)
puk.addInPos(7,2)
puk.add(8)
puk.removeByPos(0)
puk.addInPos(9,0)


puk.logMetod()





