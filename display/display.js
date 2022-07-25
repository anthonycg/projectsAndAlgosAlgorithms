// Display
// Use classes, attributes, and methods in the JavaScript language for this challenge. Use only a single 
// JavaScript file for this assignment, it may be the same from the Fronts assignment. All examples are done 
// in order, starting with a new instance of the SLL class.

// Create display() that uses a while loop and a runner to return a string containing all list values. 
// Build what you wish console.log(myList) did!

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
    display() {
        let nodeValues = []
        if (this.head == null) {
            return nodeValues
        }
            while (SLLNode != null) {
                nodeValues.push(SLLNode)
                SLLNode = SLLNode.next
            }
            return nodeValues
    }
}

let newSLL = new SLL();
newSLL.addFront(45)
newSLL.addFront(34)
newSLL.addFront(36)
newSLL.addFront(46)
newSLL.display()
console.log(newSLL.returnFrontValue())
console.log(newSLL)

