var Map = function () {
  this.collection = {};
  // Only change code below this line

  this.add = (key, value) => {
    // Note, this can also be used to update a value
    this.collection[key] = value;
  };

  this.has = (key) => {
    return this.collection[key] !== undefined;
  };

  this.get = (key) => {
    if (this.collection[key] !== undefined) return this.collection[key];
  };

  this.remove = (key) => {
    if (this.has(key)) {
      delete this.collection[key];
    }
  };

  this.values = () => {
    return Object.values(this.collection);
  };

  this.size = () => {
    return Object.keys(this.collection);
  };

  this.clear = () => {
    this.collection = {};
  };

  // Only change code above this line
};


const obj = new Map();

obj.add("greet", "hii")

console.log(obj.values());

console.log(obj.size());




// 23 SEPT 2025

// The next few challenges will cover maps and hash tables. Maps are data structures that store key-value pairs. In JavaScript, these are available to us as objects. Maps provide rapid lookup of stored items based on key values and are very common and useful data structures.

// Let's get some practice creating our own map. Because JavaScript objects provide a much more efficient map structure than anything we could write here, this is intended primarily as a learning exercise. However, JavaScript objects only provide us with certain operations. What if we wanted to define custom operations? Use the Map object provided here as a wrapper around a JavaScript object. Create the following methods and operations on the Map object:

// add accepts a key, value pair to add to the map.
// remove accepts a key and removes the associated key, value pair
// get accepts a key and returns the stored value
// has accepts a key and returns true if the key exists or false if it doesn't.
// values returns an array of all the values in the map
// size returns the number of items in the map
// clear empties the map


// 1. The Map data structure should exist.
// 2. The Map object should have the following methods: add, remove, get, has, values, clear, and size.
// 3. The add method should add items to the map.
// 4. The has method should return true for added items and false for absent items.
// 5. The get method should accept keys as input and should return the associated values.
// 6. The values method should return all the values stored in the map as strings in an array.
// 7. The clear method should empty the map and the size method should return the number of items present in the map.
