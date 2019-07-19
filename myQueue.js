class Queue{
  constructor(...items){
    this._items = []
    this.enqueue(...items)
  }
  
  enqueue(...items){
    this._items = [...this._items, ...items]
    return this._items;
  }
  
  dequeue(count=1){
    this._items.splice(0,count);
    return this._items;
  }
  
  peek(){
    //peek at the first item from the queue
    return this._items[0]
  }
  
  size(){
    //get the length of queue
    return this._items.length
  }
  
  isEmpty(){
    //find whether the queue is empty or no
    return this._items.length===0
  }
}

let myQueue = new Queue(1,2,3);
// [1, 24, 4]
myQueue.enqueue(25)
//[1, 24, 4, 23]
myQueue.enqueue(1,2,342);
//[1, 24, 4, 23, 1, 2, 342]
myQueue.dequeue();
//[24, 4, 23, 1, 2, 342]
myQueue.dequeue(3)
//[1, 2, 342]
myQueue.isEmpty()
// false
myQueue.size();
//3
