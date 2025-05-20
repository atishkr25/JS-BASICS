const netflix = ["The dark knight", "money heist"]
const prime  = ["Panchayat", "The family man"];
// console.log(netflix)

prime.push(netflix)
console.log(prime)
// console.log(typeof prime)
console.table(prime)
console.log(prime[2][0])

const series = [...netflix,...prime]
console.log(series)





//spread operator 
let arr = [1,2,3,4,5];
let maxi = Math.max(...arr); // here unpacking the each seperate element then finding the max element 
let mini = Math.min(...arr);
console.log(`maximum element is : ${maxi}`);
console.log(`minimum element is : ${mini}`);


let name = "Atish Kumar";
let letters = [...name].join("-");
console.log(letters)


let fruits = ["Orrange", "Mangoes", "Apple"];
let vegetables = ["Carrots", "Onion", "Pottatoes"];

let foods = [...fruits, ...vegetables]; // it will combine both arr in one array
console.log(foods);