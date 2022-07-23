// Add Front
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

class SLLNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }
    addFront(value) {
        let newNode = new SLLNode(value) //making new instance of node via SLLNode class
        newNode.next = this.head; //making new node instance point to head of our Singly linked list. they have no connection w/o this
        this.head = newNode;
        return this.head;
    }
    removeFront() {
        let deletedNode = this.head
        this.head = deletedNode.next
        deletedNode = null
        return this.head
    }
    returnFrontValue() {
        return this.head == null ? null : this.head.value;
    }
 }

let newSLL = new SLL();
newSLL.addFront(45)
newSLL.addFront(34)
newSLL.addFront(36)
newSLL.removeFront()
newSLL.removeFront()
console.log(newSLL.returnFrontValue())
console.log(newSLL)


