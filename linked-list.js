/** Node: node for a singly linked list. */

class Node {
  constructor(val, link = null) {
    this.val = val;
    this.next = link;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) this.head = newNode;

    if(this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;

  }
  /** unshift(val): add new value to start of list. */

  unshift(given_ptr, val) {
    if(head == given_ptr) {
      const n = new Node(val);
        n.next = head;
        head = n;
        return;
    }
    else{
      const p = null;
        for (n = head; n != given_ptr; p = n, n = n.next);

      const m = new Node(val);
        m.next = p.next;
        p.next = m;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.tail) {
      return null;
    }else {
      let currentNode = this.head;
      let preTail = this.head;
      while (currentNode.next) {
        preTail = currentNode;
        currentNode = currentNode.next;
      }
      this.tail = preTail;
      this.tail.next = null;
      this.length -= 1;
      if(!this.length) {
        this.head = null;
        this.tail = null;
      }
      return currentNode;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if(!this.length) {
      return null;
    } else {
      const nodeToRemove = this.head;
      this.head = this.head.next;
      this.length -= 1;

      if(!this.length) {
        this.tail = null;
      }
      return nodeToRemove;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if(idx < 0 || idx >= this.length) {
      return null;
    } else {
      let count = 0;
      let currentNode = this.head;

      while(count < idx) {
        currentNode = currentNode.next;
        count += 1;
      }
      return currentNode;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(val, idx) {
    if(this.size < idx) {
      console.log("index is greater than size of list");
      return;
    }
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
    } else if (idx === 0) {
      const head = this.head;
      this.head = node;
      node.next = head;
    } else {
      let previousNode;
      let currentNode = this.head;
      let idxCounter = 0;

      while(idxCounter < idx) {
        previousNode = currentNode;
        currentNode = previousNode.next;

        idxCounter++;
      }
      previousNode.next = node;
      node.next = null;
      if(currentNode) {
        node.next = currentNode;
      }
    }
    this.size++;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {
    
  }
}

module.exports = LinkedList;
