import { Node } from './list-node.js';

class LinkedList{
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  toString() {
    let str = '';
    let currentNode = this.head;
    for (let i = 0; i <= this.size; i++) {
      if (currentNode == null) {
        str += 'null';
        return str;
      } else {
        str += `( ${currentNode.value} ) -> `;
        currentNode = currentNode.next;
      }
    }
    return str;
  }

  append(value) {
    let newNode = new Node(value, null);
    if (this.tail == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

  prepend(value) {
    let newNode = new Node(value, null);
    if (this.head == null) {
      this.head == newNode;
      this.tail == newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode; 
    }
    this.size += 1;
  }
}

let testList = new LinkedList();

testList.append('dog');
testList.append('cat');
testList.append('mouse');

console.log(testList);
console.log(testList.toString());

testList.prepend('horse');

console.log(testList.toString());