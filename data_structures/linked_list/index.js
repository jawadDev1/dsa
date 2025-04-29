class Node {
  data = null;
  next = null;

  constructor(val) {
    this.data = val;
  }
}

class LinkedList {
  head = null;
  tail = null;
  current = null;

  add(val) {
    if (!this.head) {
      this.head = new Node(val);
      this.head.next = null;
      this.tail = this.head;
      this.current = this.head;
      return;
    }

    if (this.current == this.tail) return this.addAtTail(val);

    const newNode = new Node(val);
    newNode.next = this.current.next;
    this.current.next = newNode;
    this.current = newNode;
    
  }

  addAtHead(val) {
    if (!this.head) return this.add(val);

    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
  }

  addAtTail(val) {
    if (!this.tail) return this.add(val);

    const newNode = new Node(val);
    this.tail.next = newNode;
    this.tail = newNode;
  }

  deleteAtHead() {
    let temp = this.head.next;
    delete this.head;
    this.head = temp;
  }

  deleteAtTail() {
    let temp = this.head;
    while (temp.next.next !== null) {
      temp = temp.next;
    }

    temp.next = null;
    this.tail = temp;
  }

  deleteCurrent() {
    if (this.current == this.head) return this.deleteAtHead();
    if (this.current == this.tail) return this.deleteAtTail();

    let temp = this.head;
    while (temp.next !== this.current) {
      temp = temp.next;
    }

    temp.next = this.current.next;
    this.current = temp;
  }

  reverse() {
    let current = this.head;
    let prev = null;
    let next = current.next;

    this.tail = current;

    while (current !== null) {
      next = current.next;
      current.next = prev;

      prev = current;
      current = next;
      next = current?.next;
    }

    this.head = prev;
  }

  removeDuplicates() {
    let temp = this.head;
    while (temp.next !== null) {
      if (temp.data == temp?.next?.data) {
        temp.next = temp?.next?.next;
      } else {
        temp = temp.next;
      }
    }
  }

  hasCycles() {
    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow == fast) return true;
    }

    return false;
  }

  display() {
    let temp = this.head;
    while (temp !== null) {
      console.log("Value :: ", temp.data);
      temp = temp.next;
    }
  }
}

const list = new LinkedList();

list.add(1);
list.add(1);
list.add(1);
list.add(1);
// list.addAtTail(2);
// list.addAtTail(2);
// list.addAtTail(3);
// list.addAtTail(4);

// list.removeDuplicates();

console.log("Cycles ==> ", list.hasCycles());
// list.reverse()

list.display();
