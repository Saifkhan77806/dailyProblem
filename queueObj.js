function Queue() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line
  this.enqueue  = function(item){
    collection.push(item);
}

this.dequeue  = function(){
   return collection.shift();
}

this.front = function(){
    return collection[0];
}

this.size = function(){
    return collection.length;
}

this.isEmpty = function(){
    return collection.length <= 0;
}
  // Only change code above this line
}

const obj = new Queue();

obj.enqueue("item");
obj.enqueue("hii");

console.log("Dequeue", obj.dequeue());
console.log("size", obj.size());
console.log("isEmpty", obj.isEmpty());
console.log("front", obj.front())

obj.print()