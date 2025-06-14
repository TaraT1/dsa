## js
- for(let num of nums) iterates through every element (and not indices)
- for(num in nums) - operates on objects

## Big-O Notation
- what
    - performance
    - how performance scales with input size
    - approximation  
- why
    - can compare performance of algos
    - doesn't rely on environment
- how to simplify
    - drop constant factors O(4n) --> O(n)
    - drop smaller terms in sum
        - O(n + n^4 +n^2) --> O(n^4)
        - O(n^4 - n^3) --> O(n^4)
        - O(4n^2 + n + 5) --> O(n^2)
        - O(n^2 / 2 + 900) --> O(n^2)
### Performance
- worse
    - O(n!): 8! = 8x7x6...x1 = 40,320 (factorial)
    - O(c^n): O(2n), O(3n) (exponential) (c is constant)
    - O(n^c): O(n^2), O(n^3) (polynomial)
    - O(n): linear
    - O(log(n)): log(32)
    - o(1): constant - performance does not scale with input size
- better

    - O(2^n + n^10) ---> O(2^n) - exponential is worse than polynomial

## Hashing
- technique used for storing and retrieviing data as fast as possible; allows fast insertion, deletion, searching, &c; avg cases operations can be performed in O(1); worse case: O(n)
- In js, object (hash set & hash map). In python, dictionary
    - set commands/syntax
    - object commands/syntax
        - e.g. Can't compare equality of objects with js.  In js, that means checking same memory location and not if they're the same keys & vals.
- O(n^2) --> O(n) or O(1)
- https://www.geeksforgeeks.org/javascript/hashing-in-javascript/
- implementing hash tables with object and map classes [fcc](https://www.freecodecamp.org/news/javascript-hash-table-associative-array-hashing-in-js/)
    - Object data type can pair object's property value with a property key
        - has properties added by the object class, where inheritance conflicts may arise.
        - size of the hash table is not tracked
    - Map requires use of set() and get() to define and retrieve key-pair values; can't overwrite inherited properties

### Hash Table 
- data structure that stores key-value pairs
- basic operations include insert, get, search, delete

### Create Hash Table
- create hash table class with table & size initial properties
- add hash() to transform keys into indices
- add set() and get() methods

## Recursion
- iterative - when a function that loops
- recursive - function that calls itself
- anatomy: 
    - base case - stop condition (otherwise runaway recursion)
    - recursive step - keeps recursion going
```javascript
const countdown = (n) => {
  if(n === 0) {
    return;
  }
  console.log('entering', n)
  countdown(n - 1)
  console.log('returning from', n)
}

countdown(5)
```
## Linked List
- ordered data structure where nodes are linked together
- head: first node
- tail: last node; last node points to null

### type of linked lists
- singly linked list - each node contains one pointer to the next node
- doubly linnked list - each node contains two pointers - a pointer to the previous node and a pointer to the next node
- circular linked list - last node points to the first node or any other node before it forming a loop

### methods
- size() - returns number of nodes 
- clear() - empties the list
- getLast() - returns last node
- getFirst() - returns the head

```javascript
class Node {
    constructort(val){
    this.val = val
    this.next = null
    }
}

a.next = b
b.next = c
c.next = d

// a -> b --> c --> d --> null

const printLnkedList = (head) => {
    let current = head
    while(current !== null) {
        console.log(current.val)
        current = current.next
    }
}
printLinkedList(a)
```