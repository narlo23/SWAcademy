class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.lenlist = 0;
    }

    find(value) {
        let currNode = this.head;
        while (currNode.value !== value) {
            currNode = currNode.next;
        }
        return currNode;
    }

    append(newValue) {
        const newNode = new Node(newValue);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.lenlist += 1;
    }

    insert(node, newValue) {
        const newNode = new Node(newValue);
        newNode.next = node.next;
        node.next = newNode;
        this.lenlist += 1;
    }

    remove(value) {
        let prevNode = this.head;
        while (prevNode.next.value !== value) {
            prevNode = prevNode.next;
        }

        if (prevNode.next !== null) {
            prevNode.next = prevNode.next.next;
        }
        this.lenlist -= 1;
    }

    display() {
        let currNode = this.head;
        let displayString = "[";
        while (currNode !== null) {
            displayString +=  `${currNode.value}, `;
            currNode = currNode.next;
        }
        displayString = displayString.substr(0, displayString.length-2);
        displayString += "]";
        console.log(displayString);
    }

    size() {
        console.log(this.lenlist);
    }
}

const linkedList = new SinglyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

linkedList.size();

linkedList.append(5);
linkedList.size();

linkedList.display();
console.log(linkedList.find(3));
linkedList.remove(3);
linkedList.size();

linkedList.display();
linkedList.insert(linkedList.find(2), 10);
linkedList.display();
linkedList.size();