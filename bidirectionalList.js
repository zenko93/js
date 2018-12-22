
class list {

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }


    addFirst(plus) {
        let temp;
        let node = new Node(plus);

        temp = this.head;
        this.head = node;
        this.head.next = temp;


        if(this.size === 0){
            this.tail = this.head;
        }
        else{
            temp.previous = this.head;
        }
        this.size ++;
    }

    addLast(add){
        let node = new Node(add);

        if(this.size === 0){
            this.head = node;
        }
        else{
            this.tail.next = node;
            node.previous = this.tail;
        }
        this.tail = node;
        this.size++;
    }

    removeFirst(){
        if(this.granici(0) === true) {
            this.head = this.head.next;
            this.head.previous = null;
            this.size--;
        }
    }

    removeLast(){
        if(this.granici(this.size) === true){
            this.tail = this.tail.previous;
            this.tail.next = null;
            this.size --;
        }
    }

    searchMetod(index){
        let goRight = this.head;
        let goLeft = this.tail;
        let count = 0;

        if(index < this.size / 2){
            while(goRight != null){
                if(index === count){
                    console.log(goRight.value);
                    break;
                }
                goRight = goRight.next;
                count ++;
            }
        }
        else{
            index = this.size - (index + 1);

            while (goLeft != null){
                if(index === count){
                    console.log(goLeft.value);
                    break;
                }
                goLeft = goLeft.previous;
                count ++;
            }
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
            pool += current.value + " <-> ";
            current = current.next;
        }
        console.log(pool + 'null')
        console.log("Size = " + this.size)
    }
}


class Node{
    constructor(value, next, previous){
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

puk = new list()


puk.addFirst(2)
puk.addFirst(1)
//
//



// puk.removeFirst()
// puk.removeFirst()

// puk.removeLast()

puk.addLast(3)
puk.addLast(4)
puk.addLast(5)
puk.addLast(6)
puk.addLast(7)



puk.searchMetod(4)

puk.logMetod()




