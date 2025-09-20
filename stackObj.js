function Stack() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line
  this.push = function(item){
    collection.push(item)
  }

  this.pop = function(){
   return collection.pop();
  }

  this.peek = function(){
    return collection[collection.length -1];
  }

  this.isEmpty = function(){
    return collection.length <= 0;
  }

  this.clear = function(){
    collection = [];
    return collection;
  }

  // Only change code above this line
}


const obj = new Stack();

obj.push("hii");
obj.push("hello");
console.log(obj.isEmpty())

obj.print()