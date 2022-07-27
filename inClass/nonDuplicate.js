/* 
SList: Add Non-Duplicate Val

Create addNonDup(val). Add a Node to the end of a 
SLL only *if* the val is not already in the SLL.
Return the new list. */

class Node {
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

let hashMap = {}
class LinkedList {
    constructor() {
        this.head = null;
    }

    addNonDup(val){
        let i = this.head;

        while(i !== null) {
            if (val !== i.data ) {
                i = i.next
            } else if (val == i.data) {
                return this
            }
        } 
         t= val
        }


        
    }


// loop through all nodes while checking for node == value
//IF we find an equiv value, break
//ELSE, add to end of SLL

let the_list = new LinkedList();
let node1 = new Node(9);
let node2 = new Node(15);
the_list.head = node1;
node1.next = node2;
