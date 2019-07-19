# js-utilities

-------------------------------------------------
HashTable
-------------------------------------------------
let myHashTable = new HashTable();
myHashTable.set('asgdgd', 'pluto');
myHashTable.showTable();


-------------------------------------------------
Queue
-------------------------------------------------
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
