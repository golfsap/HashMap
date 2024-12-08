const HashMap = require("./hashmap");

const test = HashMap();
// populate hashmap
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
console.log(test.length());

// hashmap should now be full with 0.75 load factor
// overwrite nodes
test.set("hat", "blue");
test.set("jacket", "black");
console.log(test.length());

// exceed load factor
test.set("moon", "silver");
console.log(test.length());
// rewrite nodes
test.set("elephant", "white");
test.set("ice cream", "orange");
console.log(test.get("lion"));
console.log(test.has("kite"));
console.log(test.remove("kite"));
console.log(test.length());
console.log(test.has("kite"));
console.log(test.keys());
console.log(test.values());
console.log(test.entries());
test.clear();
console.log(test.length());
console.log(test.keys());
