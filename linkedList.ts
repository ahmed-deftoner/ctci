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
            let prev: Node<T>
            let current: Node<T> = this.head
            while (current.next != undefined) {
                prev = current
                current = current.next
                if (current.data == data) {
                    prev.next = current.next
                }
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

    peekFirst(): T | undefined {
        if (this.head == undefined) {
            return undefined
        }
        return this.head.data
    }

    peekLast(): T | undefined {
        if (this.head == undefined) {
            return undefined
        }
        return this.tail.data
    }
}

let x: LinkedList<number> = new LinkedList<number>()
x.addNode(23)
x.addNode(44)
x.addNode(65)
x.print()
x.deleteNode(44)
x.deleteNode(65)
x.deleteNode(23)
x.print()
console.log(x.peekFirst())
console.log(x.peekLast())