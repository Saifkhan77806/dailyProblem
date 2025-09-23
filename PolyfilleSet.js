class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  // This method will return all the values in the set
  values() {
    return Object.values(this.dictionary);
  }

  // Only change code below this line

  add(el) {
    if (!this.has(el)) {
      this.dictionary[el] = el;
      this.length++;
      return true;
    } else return false;
  }

  remove(el) {
    if (this.has(el)) {
      delete this.dictionary[el];
      this.length--;
      return true;
    } else return false;
  }

  size() {
    return this.length;
  }

  union(setData){
  for(const el of setData){
    if(!this.has(el)){
      this.dictionary[el] = el
    }
    return Object.values(this.dictionary);
  }
}

  // Only change code above this line
}

const obj = new Set();
const obj1 = new Set();

obj.add("hii");
obj.add("hello");

obj1.add("hey");
obj1.add("hello");

obj1.add("hiy");


// console.log(obj.has("helṇlo"));

console.log(obj.union(obj1.values()))
console.log(obj.values());
