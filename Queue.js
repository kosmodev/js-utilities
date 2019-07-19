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

