// let a = 12;
// let b = 9;
function multiplication(a=10, b=2) {
    return a * b ;
}
console.log(multiplication(25, 5));
console.log(multiplication(11))

//arrow type function
const sayhi = () => console.log("Hyy"); 
sayhi()

const multiply = (a, b) => { return (a * b) - (a+b); } // if we use curlibraces({}) then we must have write the return keyword
console.log(multiply(2,4));

const sum = (a,b) => {
  console.log(a^b)
  console.log(a*b)
}
sum(1,1);

// a type of dynmeic array by using (...) spread operator
function findsum(...num) {
  console.log(num)
}
findsum(10)
findsum(11,22,33,44,55,66);

//IIFE (Immediately Invoked Function Expression.)
(()=>{
    console.log("i am batman");
  })();

((name) => {
  console.log(`hey ${name} bro`);
})("atish");