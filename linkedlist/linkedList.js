class Node {

    constructor(node, next = null) {
        this.node = node;
        this.next = next;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
        this.size = 0;
    }

    addNode(node) {
        let nextNode = new Node(node);
        nextNode.next = this.head;
        this.head = nextNode;
        return this.head;
    }

    insertNodeAtLast(node) {
        if (this.head == null) {
            linkedList.addNode(node);
            return;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }

        return linkedList;
    }

    findNode(name) {
        if (!this.head) {
            return null;
        }

        let currentNode = this.head;

        while(currentNode) {
            if (currentNode.node === name){
                console.log(currentNode.node);
                return currentNode.node;
            }
            currentNode = currentNode.next;
        }

        return null;
    }

    deleteNode(name) {
        if(!this.head) {
            return null;
        }

        let currentNode = this.head;
        let previousNode = null;
        while(currentNode) {
            if(currentNode.node === name && currentNode === this.head) {
                currentNode = null;
            } else if (currentNode.node === name) {
                previousNode.next = currentNode.next;
                currentNode = null;
            } else {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
        }
        console.log(linkedList);
    }

}

let linkedList = new LinkedList();

export { linkedList };