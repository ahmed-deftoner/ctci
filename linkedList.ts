type Node<T> = {
    data: T,
    next: Node<T>
}

class LinkedList<T> {
    private head: Node<T>;
    private tail: Node<T>;
    private len: number;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.len = 0;
    }

    addAtStart(data: T) {
        const newNode: Node<T> = {
            data: data, 
            next: this.head
       };
       this.head = newNode;
       this.len++;
    }

    addAtEnd(data: T) {
        const newNode: Node<T> = {
             data: data, 
             next: undefined
        };
        if (this.head == undefined) {
            this.head = newNode;
        } else {
            let temp: Node<T> = this.head;
            while (temp.next != undefined) {
                temp = temp.next;
            }
            temp.next = newNode;
        }
        this.tail = newNode;
        this.len++;
    }

    deleteNode(data: T) {
        if (this.head.data == data) {
            this.head = undefined;
        } else {
            let prev: Node<T>;
            let current: Node<T> = this.head;
            while (current.next != undefined) {
                prev = current;
                current = current.next;
                if (current.data == data) {
                    prev.next = current.next;
                    this.len--;
                }
            }
        }
    }

    deleteEnd() {
        let current: Node<T> = this.head;
        let prev: Node<T> = current;
        while (current.next != undefined) {
            prev = current;
            current = current.next;
        }
        this.tail = prev;
        current = undefined;
        this.len--;
    }

    deleteStart() {
        this.head = this.head.next;
        this.len--;
    }

    print() {
        let temp: Node<T> = this.head;
        let arr: Array<T> = new Array<T>();
        while (temp != undefined) {
            arr.push(temp.data);
            temp = temp.next;
        }
        console.log(arr);
    }

    peekFirst(): T | undefined {
        if (this.head == undefined) {
            return undefined;
        }
        return this.head.data;
    }

    peekLast(): T | undefined {
        if (this.head == undefined) {
            return undefined;
        }
        return this.tail.data;
    }

    length(): number {
        if (this.head == undefined) {
            return 0;
        }
        return this.len;
    }
}

let x: LinkedList<number> = new LinkedList<number>()
x.addAtEnd(23)
x.addAtEnd(44)
x.addAtEnd(65)
x.addAtStart(56)
x.print()
x.deleteEnd()
x.deleteStart()
console.log(x.peekFirst())
console.log(x.peekLast())
console.log(x.length())