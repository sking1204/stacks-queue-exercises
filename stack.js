/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */
  /*TODO from here. The above is provided by SB:  */

  push(val) {

  //first, instantiate new instance of Node class:

  let node = new Node(val);
  

  //then check if we have a head for the node. If we don't have a head then
  //set the head and tail (.first, .last) to equal the newNode variable

    if(!this.first){
      this.first = node;
      this.last = node;

    // if we do have this.first, then we want to take whatever value is being
    //passed through to the push function and set that value to be the new
    //'this.first', we will then need to update the previous/initial 'this.first'
    //to be the new 'this.first.next' value which will make this value the new 
    //'this.last'

    }else{
      let previousFirst = this.first;
      this.first = node;
      this.first.next = previousFirst;
    }

    //increase this.size value by 1

    this.size = this.size + 1;

  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {

    //first, check if the stack is empty. If empty, throw error
    if(!this.first) throw new Error("Stack cannot be empty")

    //set the node we want to remove to be this.first since we are popping
    //off the first node in the stack. If there is only one node in the stack,
    //we want to set this.last to be null because after we pop the node off,
    //the stack will be empty
    let nodeToRemove = this.first;
    if(this.first === this.last){
      this.last = null
    }

    //if we have more than one node in our stack, set the node after the current 
    //first node to be the new 'this.first'. We will need to then update the size
    // of the stack and decrease it by 1. Then return the value of the popped off
    //node

    this.first = this.first.next;
    this.size = this.size -1;
    console.log(`Removing: ${nodeToRemove.val}`)
    return nodeToRemove.val;
    


  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
  if(!this.first) throw new Error("Queue cannot be empty");

    let showFirstNode = this.first.val;
    console.log(`Peek: ${this.first.val} `);
    return showFirstNode;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {

    if(!this.first){
      console.log("queue is empty");
      return true;
    } else{ 
      console.log("queue is not empty")   
     return false;
  }
  }
}

//instantiate new instance of stack and performing push(), pop():

// let stack = new Stack();
// console.log(stack);
// stack.push(3);
// console.log(stack)
// stack.push(5);
// console.log(stack)
// stack.push(11);
// console.log(stack)
// stack.pop();
// console.log(stack);
// stack.peek();
// stack.isEmpty();

//checking for empty stack:

let stack = new Stack();
stack.isEmpty();




module.exports = Stack;
