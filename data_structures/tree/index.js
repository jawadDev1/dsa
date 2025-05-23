class Node {
  constructor(val) {
    this.value = val;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.idx = -1;
  }

  buildTree(preorder) {
    this.idx++;
    if (preorder[this.idx] == -1 || this.idx > preorder.length - 1) return null;

    let newNode = new Node(preorder[this.idx]);
    // this.idx++;
    newNode.left = this.buildTree(preorder);
    newNode.right = this.buildTree(preorder);

    return newNode;
  }

  display(root) {
    if(!root) return;
    console.log("Val -> ", root.value);

    if (root?.left) this.display(root.left);
    if (root?.right) this.display(root.right);
  }
}

let preorder = [1, 2, -1, -1, 3, 4, -1, -1, 5];

let tree = new BinaryTree();

tree.root = tree.buildTree(preorder);

tree.display(tree.root);
