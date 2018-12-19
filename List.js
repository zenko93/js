
class list{

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
        this.previous = null;
    }

    add(plus) {
        this.node = new Node(plus);

        if(this.head == null) {
            this.head = this.node;
            this.tail = this.node;
        }
        else {
            this.tail.next = this.node;
            this.tail = this.node;
        }
        this.size ++;
    }


    addInPos(znach, index) {
        this.schet = 0;
        this.current = this.head;
        this.previous = null;

        while(this.current != null){
            if(this.schet === index ){
                if(this.previous != null){
                    let neo = new Node(znach);
                    this.previous.next = neo;
                    neo.next = this.current.next;

                    if(this.current.next == null){
                       this.add(znach);
                    }
                }
                else{
                    let neo = new Node(znach);
                    this.head = neo;
                    this.head.next = this.current;
                }
            }
            this.previous = this.current;
            this.current = this.current.next;
            this.schet++;
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
        this.count = 0;
        this.current = this.head;
        this.previous = null;

        while (this.current != null) {
            if (this.count === position) {
                if (this.previous != null) {
                    this.previous.next = this.current.next;

                    if (this.current.next == null) {
                        this.tail = this.previous;
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
            this.previous = this.current;
            this.current = this.current.next;
            this.count ++;
        }

    }


    logMetod (){
        console.log(this.head);
    }
}

class Node{
    constructor(value, next){
        this.value = value;
        this.next = null;
    }
}
puk = new list()


puk.add(66)
puk.add(77)
puk.add(88)
puk.add(55)

puk.removeByPos(0)
puk.removeByPos(0)
puk.removeByPos(0)

puk.addFirst(2)
puk.removeAll();
puk.add(55)


puk.addInPos (11,0)
puk.addInPos (25,1)
puk.addInPos (48,3)
puk.logMetod()






