type Node<T> = {
    data: T,
    next: Node<T>
}

class LinkedList<T> {
    private head: Node<T>;
    private tail: Node<T>;

    constructor() {
        this.head = undefined
        this.tail = undefined
    }

    addNode(data: T) {
        const newNode: Node<T> = {
             data: data, 
             next: undefined
        }
        if (this.head == undefined) {
            this.head = newNode
        } else {
            let temp: Node<T> = this.head
            while (temp.next != undefined) {
                temp = temp.next
            }
            temp.next = newNode
        }
        this.tail = newNode
    }

    deleteNode(data: T) {
        if (this.head.data == data) {
            this.head = undefined  
        } else {
            let temp: Node<T> = this.head
            while (temp.next != undefined) {
                if (temp.next.data == data) {
                    temp.next = temp.next.next
                }
                temp = temp.next
            }
        }
    }

    print() {
        let temp: Node<T> = this.head
        while (temp != undefined) {
            console.log(`${temp.data} ->`)
            temp = temp.next
        }
    }

    peekFirst(): T {
        return this.head.data
    }

    peekLast(): T {
        return this.tail.data
    }
}

let x: LinkedList<number> = new LinkedList<number>()
x.addNode(23)
x.addNode(44)
x.addNode(65)
x.print()
x.deleteNode(44)
console.log(x.peekFirst())
console.log(x.peekLast())