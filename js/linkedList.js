
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