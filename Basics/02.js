//symbol always return unique value


const a = Symbol();
const b = Symbol();
console.log(a === b); // false

console.log(typeof a)

let object1  = ["abc", "def", "Atish"];
console.log(object1)
// console.table(object1);

console.log(object1[0])
console.log(object1[2])

object1.push("kumar")// append at last 
console.log(object1)

object1.unshift("hello")// add at first 
console.log(object1)

object1.shift("world")// remove from first 
console.log(object1)

object1.pop()// remove form last 
console.log(object1)

const abc =  object1.join();
console.log(abc)