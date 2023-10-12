/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */
  /*TODO from here. The above is provided by SB:  */

  enqueue(val) {
  //first, instantiate new instance of Node class:

  let newNode = new Node(val);

  //then check if we have a head for the node. If we don't have a head then
  //set the head and tail (.first, .last) to equal the newNode variable

    if(!this.first){
      this.first=newNode;
      this.last=newNode;
    }

  //if we do have a this.first, we then go to the current this.last and set the val passed into the new
  //instance of the newNode class to be the next new node (this.last.next)
  //we then have to update this.last.next to be the new tail (this.last)

    else{
      this.last.next = newNode;
      this.last = newNode;


    }
    
//increase this.size value by 1
    this.size++;
    




  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if(!this.first) throw new Error("Queue cannot be empty");

    let nodetoRemove = this.first;
    if(this.first === this.last){
      this.last = null
    }
    this.first=this.first.next;
    this.size = this.size -1;
    console.log(`Removing: ${nodetoRemove.val}`)
    return nodetoRemove.val;

  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if(!this.first) throw new Error("Queue cannot be empty");

    let showFirstNode = this.first;
    console.log(`Peek: ${this.first.val} `);
    return this.first.val;

  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

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

//instantiate new instance of queue and performing enqueue-ing and degueue-ing:

let queue = new Queue();
console.log(queue);
queue.enqueue(3);
console.log(queue)
queue.enqueue(6);
console.log(queue)
queue.enqueue(9);
console.log(queue);

queue.dequeue();
console.log(queue);
queue.peek();
queue.isEmpty();

//checking for empty queue:

// let queue = new Queue();
// queue.isEmpty();




module.exports = Queue;
