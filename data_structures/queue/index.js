import { LinkedList } from "../linked_list/index.js";

class Queue {
  
  constructor() {
    this.list = new LinkedList();
    this.size = 0;
  }

  enqueue(val) {
    this.list.addAtTail(val);
    this.size++;
  }

  dequeue() {
    this.list.deleteAtHead();
    this.size--;
  }

  peek() {
    return this.list.head.data;
  }

  isEmpty() {
    return this.list.head == null;
  }

  display() {
    this.list.display();
  }



}

const queue = new Queue();

queue.enqueue(5);
queue.enqueue(23);
queue.enqueue(1);

console.log(queue.peek());
queue.dequeue()


queue.display()


