
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
