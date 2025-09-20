// URL SHORT MAKER

function generateSlug(str) {

  if(!str) return;
  


 return str
 .toLowerCase()
 .trim()
 .replace(/ {2}/, "%20")
 .replace(/ /g, "%20")
 .replace(/%(?!20)/g, "")
 .replace(/[^a-z0-9%]/g, "");


  
}

console.log(generateSlug(" helloWorld "));
console.log(generateSlug("hello world!"));
console.log(generateSlug(" hello-world "));
console.log(generateSlug("hello  world"));
console.log(generateSlug("  ?H^3-1*1]0! W[0%R#1]D  "));
  
