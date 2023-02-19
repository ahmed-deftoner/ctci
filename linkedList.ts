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

    print() {
        let temp: Node<T> = this.head
        while (temp != undefined) {
            console.log(`${temp.data} ->`)
            temp = temp.next
        }
    }
}

let x: LinkedList<number> = new LinkedList<number>()
x.addNode(23)
x.addNode(44)
x.addNode(65)
x.print()