import Node from "./Node.js";

export default class LinkedList {
  constructor() {
    this.linkedList = null;
  }

  append(node) {
    const tailNode = this.tail();
    if (!tailNode) {
      this.linkedList = node;
      return true;
    }
    tailNode.nextNode = node;
    return true;
  }

  prepend(node) {
    const headNode = this.head();
    if (!headNode) {
      this.linkedList = node;
      return true;
    }
    this.linkedList = node;
    node.nextNode = headNode;
    return true;
  }

  size() {
    if (!this.linkedList) {
      return 0;
    }
    let auxNode = this.linkedList;
    let count = 1;
    while (auxNode.nextNode !== null) {
      auxNode = auxNode.nextNode;
      count += 1;
    }
    return count;
  }

  head() {
    if (!this.linkedList) {
      return null;
    }
    return this.linkedList;
  }

  tail() {
    if (!this.linkedList) {
      return null;
    }
    let auxNode = this.linkedList;
    while (auxNode.nextNode !== null) {
      auxNode = auxNode.nextNode;
    }
    return auxNode;
  }

  at(index) {
    if (!this.linkedList) {
      return null;
    }
    let auxNode = this.linkedList;
    let count = 0;
    while (auxNode !== null && count !== index) {
      auxNode = auxNode.nextNode;
      count += 1;
    }
    return auxNode;
  }

  pop() {
    let auxNode = this.linkedList;
    if (!auxNode) {
      return null;
    }
    if (auxNode.nextNode === null) {
      this.linkedList = null;
      return true;
    }
    while (auxNode.nextNode.nextNode !== null) {
      auxNode = auxNode.nextNode;
    }
    auxNode.nextNode = null;
    return true;
  }

  contains(value) {
    if (!this.linkedList) {
      return false;
    }
    let auxNode = this.linkedList;
    while (auxNode !== null && auxNode.value !== value) {
      auxNode = auxNode.nextNode;
    }
    return !auxNode ? false : true;
  }

  find(value) {
    if (!this.linkedList) {
      return null;
    }
    let auxNode = this.linkedList;
    let count = 0;
    while (auxNode !== null && auxNode.value !== value) {
      auxNode = auxNode.nextNode;
      count += 1;
    }
    return !auxNode ? null : count;
  }

  toString() {
    if (!this.linkedList) {
      return null;
    }
    let auxNode = this.linkedList;
    let stringConca = "";
    while (auxNode !== null) {
      stringConca += ` ( ${auxNode.value} ) ->`;
      auxNode = auxNode.nextNode;
    }
    return stringConca + " null";
  }

  insertAt(value, index) {
    if (!this.linkedList) {
      return null;
    }
    let auxNode = this.linkedList;
    let replaceNode = null;
    let count = 0;
    while (auxNode !== null && count !== index) {
      replaceNode = auxNode;
      auxNode = auxNode.nextNode;
      count += 1;
    }
    if (count !== index) {
      return null;
    }
    replaceNode.nextNode = new Node(value, auxNode);
    return true;
  }

  removeAt(index) {
    if (!this.linkedList) {
      return null;
    }
    let auxNode = this.linkedList;
    let replaceNode = null;
    let count = 0;
    while (auxNode !== null && count !== index) {
      replaceNode = auxNode;
      auxNode = auxNode.nextNode;
      count += 1;
    }
    if (count !== index) {
      return null;
    }
    replaceNode.nextNode = auxNode.nextNode;
    return true;
  }
}
