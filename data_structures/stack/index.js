class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class Stack {
  #top;
  #size;

  constructor() {
    this.#top = null;
    this.#size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    newNode.next = this.#top;
    this.#top = newNode;
    this.#size++;
  }

  pop() {
    this.#top = this.#top.next;
    this.#size--;
  }

  peek() {
    return this.#top.data;
  }

  isEmpty() {
    return this.#top == null;
  }

  display() {
    let temp = this.#top;

    while (temp !== null) {
      console.log("Val ===> ", temp.data);
      temp = temp.next;
    }
  }
}

const opening = (b) => {
  return ["{", "[", "("].includes(b);
};

function isValidParenthesis(str) {
  const validParenthesis = {
    "[": "]",
    "(": ")",
    "{": "}",
  };

  const stack = new Stack();

  for (let v of str) {
    if (stack.isEmpty() || opening(v)) {
      stack.push(v);
      continue;
    }

    let top = stack.peek();

    
    if (validParenthesis[top] == v) {
      stack.pop();
      continue;
    }

    return false;
  }

  return stack.isEmpty();
}

let stack = new Stack();

stack.push(5);
stack.push(3);
stack.push(2);
// console.log(stack.peek());

// stack.pop();

// stack.display();
const str = "[{}][]{}";

console.log(isValidParenthesis(str));
