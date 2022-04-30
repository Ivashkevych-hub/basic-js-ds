const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

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
  add(value) {
    this.rooot = addWithin(this.rooot, value);

    function addWithin(node, value) {
      if (!node) {
        return new Node(value);
      }

      if (node.value === value) {
        return node;
      }

      if (value < node.value) {
        node.left = addWithin(node.left, value);
      } else {
        node.right = addWithin(node.right, value);
      }

      return node;
    }
  }

  has(value) {
    return searchWithin(this.rooot, value);

    function searchWithin(node, value) {
      if (!node) {
        return false;
      }

      if (node.value === value) {
        return true;
      }

      return value < node.value ? 
        searchWithin(node.left, value) : 
        searchWithin(node.right, value);
    }
  }

  remove(value) {
    this.rooot = removeNode(this.rooot, value);

    function removeNode(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (node.value < value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        // equal - should remove this item
        if (!node.left && !node.right) {
          // put null instead of item
          return null;
        }

        if (!node.left) {
          // set right child instead of item
          node = node.right;
          return node;
        }

        if (!node.right) {
          // set left child instead of item
          node = node.left;
          return node;
        }

        // both children exists for this item
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.value = minFromRight.value;

        node.right = removeNode(node.right, minFromRight.value);

        return node;
      }
    }
  }

  min() {
    if (!this.rooot) {
      return null;
    }

    let node = this.rooot;
    while (node.left) {
      node = node.left;
    }

    return node.value;
  }

  max() {
    if (!this.rooot) {
      return null;
    }

    let node = this.rooot;
    while (node.right) {
      node = node.right;
    }

    return node.value;
  }
  
  

 

  find(value) {
  //  throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(!this.rooot) return false;
      
      let current = this.rooot;
      let found = false;
      while(current && !found){
            if(value < current.value){
              current = current.left;
             } else if(value > current.value){
                current = current.right;
             } else {
                  found = current;
             } 
            
            }
    
        if(!found) return null;
        return found;
      
  }

 
}

const tree = new BinarySearchTree();

// tree.root();

module.exports = {
  BinarySearchTree
};


// old version

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
// class BinarySearchTree {
//   constructor(){
//     this.rooot = null;
//   }
//   root() {
//     return this.rooot;
//   }

//   add(data) {
//     //throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//     // Creating a node and initialising
//     // with data
//     var newNode = new Node(data);
                     
//     // root is null then node will
//     // be added to the tree and made root.
//     if(this.rooot === null)
//         this.rooot = newNode;
//     else
 
//         // find the correct position in the
//         // tree and add the node
//     this.insertNode(this.rooot, newNode);
//   }

//   insertNode(node, newNode){
//     // if the data is less than the node
//     // data move left of the tree
//     if(newNode.data < node.data)
//     {
//         // if left is null insert node here
//         if(node.left === null)
//             node.left = newNode;
//         else
 
//             // if left is not null recur until
//             // null is found
//             this.insertNode(node.left, newNode);
//     }
 
//     // if the data is more than the node
//     // data move right of the tree
//     else
//     {
//         // if right is null insert node here
//         if(node.right === null)
//             node.right = newNode;
//         else
 
//             // if right is not null recur until
//             // null is found
//             this.insertNode(node.right,newNode);
//     }
//   }

//   has(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   find(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   remove(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   min() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   max() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// }

// const tree = new BinarySearchTree();

// tree.root();

