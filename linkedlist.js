import { Node } from './list-node.js';

export class LinkedList{
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

  // Starts index at 0 per standard
  at(index) {
    if (this.head == null) {
      return null;
    }
    if (index >= this.size || index < 0) {
      return null;
    }
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  pop() {
    // accounting for at() taking 0-start index values
    let newTail = this.at(this.size - 2);
    let popTarget = this.tail;
    this.tail = newTail;
    this.tail.next = null;
    this.size -= 1;
    return popTarget;
  }

  contains(value) {
    if (this.head == null) {
      return false;
    }
    let currentNode = this.head;

    for (let i = 0; i < this.size; i++) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  // Because it incurs the cost of running an iteration
  // over the array anyway, I don't check with contains()
  // for the presence of value before looping. At best it
  // saves no time; at worst, it doubles it.
  find(value) {
    if (this.head == null) {
      return null;
    }
    let currentNode = this.head;

    for (let i = 0; i < this.size; i++) {
      if (currentNode.value === value) {
        return i;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  // If index <= 0, treat as 0
  // If index > this.size, treat as this.size
  insertAt(value, index) {
    if (index > this.size) index = this.size;
    if (index < 0) index = 0;
    if (index == 0) {
      this.prepend(value);
    } else if (index == this.size) {
      this.append(value);
    } else {
      let targetNode = this.at(index);
      let previousNode = this.at(index - 1);
      let newNode = new Node(value, null);
      previousNode.next = newNode;
      newNode.next = targetNode;
      this.size += 1;
    }
  }

  // If index < 0, treat as 0
  // If index > max index of array, treat as max index
  removeAt(index) {
    if (index < 0) index = 0;
    if (index >= this.size) index = this.size - 1;
    if (index == 0) {
      let removedNode = this.head;
      this.head = removedNode.next;
      removedNode.next = null;
    } else {
      let targetNode = this.at(index);
      console.log(targetNode);
      let previousNode = this.at(index - 1);
      console.log(previousNode);
      if (targetNode.next === null) {
        previousNode.next = null;
        console.log(previousNode);
        this.tail = previousNode;
      } else {
        previousNode.next = targetNode.next;
        targetNode.next = null;
      }
    }
  }
}

// let testList = new LinkedList();

// testList.append('dog');
// testList.append('cat');
// testList.append('mouse');

// // console.log(testList);
// // console.log(testList.toString());

// testList.prepend('horse');

// // console.log(testList.toString());
// // console.log(testList.at(0));
// // console.log(testList.at(3));
// // console.log(testList.at(4));

// // console.log(testList.toString());
// // console.log(testList.pop());
// // console.log(testList.toString());

// // console.log(testList.contains('dog'));
// // console.log(testList.contains('lion'));

// // console.log(testList.find('horse'));
// // console.log(testList.find('dog'));
// // console.log(testList.find('cat'));
// // console.log(testList.find('mouse'));
// // console.log(testList.find('lion'));
// testList.insertAt('pony', 0);
// console.log(testList.toString());
// testList.insertAt('snake', 5);
// console.log(testList.toString());
// testList.insertAt('dragon', 2);
// console.log(testList.toString());
// testList.removeAt(6);
// console.log(testList.toString());
// testList.removeAt(0);
// testList.removeAt(1);
// console.log(testList.toString());