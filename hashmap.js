function HashMap() {
  let capacity = 16; // initial capacity of the hash table
  let loadFactor = 0.8; // load factor to trigger resizing
  let size = 0; // number of stored keys inside hash map
  let buckets = new Array(capacity);

  const hash = (key) => {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % capacity;
    }

    return hashCode;
  };

  const set = (key, value) => {
    const index = hash(key);
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    let currentNode = buckets[index];
    let previousNode = null;
    while (currentNode != null) {
      if (currentNode.key === key) {
        currentNode.value = value;
        return;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    const newNode = Node(key, value);
    if (buckets[index] === null) {
      buckets[index] = newNode;
    } else {
      previousNode.next = newNode;
    }
    size++;
    // TODO: have to recalculate load factor?
  };

  const get = (key) => {
    const index = hash(key);
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    let currentNode = buckets[index];
    while (currentNode != null) {
      if (currentNode.key === key) return currentNode.value;
      currentNode = currentNode.next;
    }
    return null;
  };

  const has = (key) => {
    const index = hash(key);
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    let currentNode = buckets[index];
    while (currentNode != null) {
      if (currentNode.key === key) return true;
      currentNode = currentNode.next;
    }
    return false;
  };

  const remove = (key) => {
    const index = hash(key);
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    let currentNode = buckets[index];
    let previousNode = null;
    while (currentNode != null) {
      if (currentNode.key === key) {
        if (previousNode === null) {
          buckets[index] = currentNode.next;
        } else {
          previousNode.next = currentNode.next;
        }
        size--;
        return true;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    return false;
  };

  const length = () => {
    return size;
  };

  const clear = () => {
    buckets = new Array(capacity);
    size = 0;
  };

  const keys = () => {
    let keys = [];
    for (let i = 0; i < buckets.length; i++) {
      let currentNode = buckets[i];
      while (currentNode != null) {
        keys.push(currentNode.key);
        currentNode = currentNode.next;
      }
    }
    return keys;
  };

  const values = () => {
    let values = [];
    for (let i = 0; i < buckets.length; i++) {
      let currentNode = buckets[i];
      while (currentNode != null) {
        values.push(currentNode.value);
        currentNode = currentNode.next;
      }
    }
    return values;
  };

  const entries = () => {
    let entries = [];
    for (let i = 0; i < buckets.length; i++) {
      let currentNode = buckets[i];
      while (currentNode != null) {
        entries.push([currentNode.key, currentNode.value]);
        currentNode = currentNode.next;
      }
    }
    return entries;
  };

  return {
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
  };
}

function Node(key, value) {
  return { key: key, value: value, next: null };
}
