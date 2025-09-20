str="not a palindrome".toLowerCase();
actual=str.match(/[A-Za-z]/g)
data = str.match(/[A-Za-z]/g)

reverses= data.reverse()

console.log(reverses.join(''))
console.log(actual.join(''))

if(reverses.join('')!=actual.join())
    console.log("noo")
else
    console.log("yes")