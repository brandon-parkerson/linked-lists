function LinkedList() {
  return {
    head: null,

    // Append node to the end of the list
    append(value) {
      const newNode = new Node(); // Use 'new' to create a new node
      newNode.value = value; // Set the value

      // If the list is empty, set the head to the new node
      if (this.head === null) {
        this.head = newNode;
      } else {
        let current = this.head; // Start at the head
        while (current.nextNode !== null) { // Traverse to the end of the list
          current = current.nextNode; // Move to the next node
        }
        current.nextNode = newNode; // Link the new node at the end
      }
    },

    // Prepend node at the front of the list
    prepend(value) {
      const newNode = new Node();
      newNode.value = value;
      newNode.nextNode = this.head; // Point new node to the current head
      this.head = newNode; // Update head to new node
    },

    size() {
      let count = 0;
      let current = this.head;
      while (current !== null) {
        current = current.nextNode;
        count++;
      }
      return count;
    },

    // Method to get the head node (renamed to avoid conflict)
    getHead() {
      return this.head; // Return the head node
    },

    tail() {
      let current = this.head;
      while (current !== null) {
        if (current.nextNode === null) {
          return current; // Return the last node
        }
        current = current.nextNode;
      }
      return null;
    },

    at(index) {
      let current = this.head;
      let count = 0;
      while (current !== null) {
        if (count === index) {
          return current; // Return node at the specified index
        }
        current = current.nextNode;
        count++;
      }
      return null; // Value not found
    },

    pop() {
      if (this.head === null) {
        return; // Nothing to pop
      }
      let current = this.head;
      let previous = null;
      if (current.nextNode === null) { // If only one node
        this.head = null; // Remove it
        return;
      }

      while (current.nextNode !== null) { // Traverse to the end
        previous = current;
        current = current.nextNode;
      }
      previous.nextNode = null; // Remove the last node
    },

    contains(value) {
      let current = this.head;
      while (current !== null) {
        if (current.value === value) {
          return true; // Value found
        }
        current = current.nextNode;
      }
      return false; // Value not found
    },

    find(value) {
      let index = 0;
      let current = this.head;

      while (current !== null) {
        if (current.value === value) {
          return index; // Return index of the value found
        }
        index++;
        current = current.nextNode;
      }
      return null; // Value not found
    },

    toString() {
      let current = this.head;
      let string = '';
      while (current !== null) {
        string += `( ${current.value} )`; // Append current node value
        current = current.nextNode; // Move to next node
        if (current !== null) {
          string += ' -> '; // Append arrow if there's a next node
        }
      }
      string += ' -> null'; // Append null at the end
      return string;
    }
  };
}

function Node() {
  return {
    value: null,
    nextNode: null,
  };
}

export { LinkedList };