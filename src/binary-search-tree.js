const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.rooot = null;
  }
  root() {
    return this.rooot;
  }

  add(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // Creating a node and initialising
    // with data
    var newNode = new Node(data);
                     
    // root is null then node will
    // be added to the tree and made root.
    if(this.rooot === null)
        this.rooot = newNode;
    else
 
        // find the correct position in the
        // tree and add the node
    this.insertNode(this.rooot, newNode);
  }

  insertNode(node, newNode){
    // if the data is less than the node
    // data move left of the tree
    if(newNode.data < node.data)
    {
        // if left is null insert node here
        if(node.left === null)
            node.left = newNode;
        else
 
            // if left is not null recur until
            // null is found
            this.insertNode(node.left, newNode);
    }
 
    // if the data is more than the node
    // data move right of the tree
    else
    {
        // if right is null insert node here
        if(node.right === null)
            node.right = newNode;
        else
 
            // if right is not null recur until
            // null is found
            this.insertNode(node.right,newNode);
    }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

const tree = new BinarySearchTree();

// tree.root();

module.exports = {
  BinarySearchTree
};