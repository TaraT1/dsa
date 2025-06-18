
class Node {
    constructor(val){
    this.val = val
    this.next = null
    }
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')

a.next = b
b.next = c
c.next = d

// a -> b --> c --> d --> null
// Linked list traversal (iterative)
const printLnkedList = (head) => {
    let current = head
    while(current !== null) {
        console.log(current.val)
        current = current.next
    }
}

// Recursive
const printLinkedList = (head) => {
    if (head === null) return
    console.log(head.val)
    printLinkedList(head.next)
}

printLinkedList(a)

//linked list values
//function takes in head of linked list. Returns arr containing all vals of nodes in linked list

const linkedListValues = (head) => {


}

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
//iterative
const linkedListValues = (head) => {
  const values = []
  let current = head
  while(current !== null) {
    values.push(current.val)
    current = current.next
  }
  return values
};

//recursive
const linkedListValues = (head) => {
    const values = []
    fillValues(head, values)
    return values
}

const fillValues = (head, values) => {
    if (head === null) return;
    values.push(head.val)
    fillValues(head.next, values)
}

//linked list sum
//function takes in head of linked list containing numbers. Returns sum of all values in linked list

//iterative
const sumList = (head) => {
    let sum = 0 
    let current = head
    while(current !== null) {
        sum += current.val
        current = current.next
    } 
    return sum
}
//O(n) time; O(1) space

//recursive
const sumList = (head) => {
    if(head === null) return 0
    return head.val + sumList(head.next)
}
//O(n) time; O(n) space

//Linked list find
//function takes in head of linked list and a target value. Returns boolean indicating whether target value is contained in linked list

//iterative
const findValue = (head, target) => {
    let current = head
    while(current !== null) {
        if(current.val === target ) {
            return true
        } 
        current = current.next
    } return false 
}
//O(n) time; O(1) space

//recursive
const findValue = (head, target) => {
    if(head === null) return false
    if(head.val === target) return true
    return findValue(head.next, target)
}
// O(n) time; O(n) space

//get node value
// function takes in head of linked list and index. Return value of lined list at specified index. Return nulll if no node at given index

//iterative
const getNodeValue = (head, index) => {
    let current = head
    let count = 0
    while(current !== null) {
        if(count === index){
            return current.val
        }
        count += 1
        current = current.next
    }
    return null //if index exceeds node 
}
//O(n) time; O(1) space

//recursive
const getNodeValue = (head, index) => {
  if(head === null) return null
  if(index === 0) return head.val
  getNodeValue(head.next, index - 1) //backwards count
};
//O(n) time; O(n) space

// reverse list - p: head of linked list; r: reverse order of nodes in linked list in-place and return new head
// const x = new Node("x");
// const y = new Node("y");

// x.next = y;

// // x -> y

// reverseList(x); // y -> x
//iterative
const reverseList = (head) => {
    let current = head
    let prev = null
    
    while(current !== null) {
        const next = current.next
        prev = current
        current = next
        
    } return prev //contains new head of linked list
}
//N <--  a  -->   b  -->    c
//prev  current  next

//O(n) time; O(1) space

//recursive
const reverseList = (head, prev = null) => {
    if(head === null) return prev

    const next = head.next
    head.next = prev
    return reverseList(next, head)
}
//O(n) time; O(n) space

//zipperLists
//Given 2 linked lists, return alternating nodes into single linked list. If length is longer in one, tack it on. Return head of zippered linked list; 
/**Ex
 * const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
a.next = b;
b.next = c;
// a -> b -> c

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z

zipperLists(a, x);
// a -> x -> b -> y -> c -> z
 */

const zipperLists = (head1, head2) => {
    
}