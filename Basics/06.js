const nums = [12,161,14,100]
for(let i=0; i<nums.length; i++){
  console.log(nums[i]);
}

console.log("______");

for(let i of nums){
  console.log(i);
}

// nums.forEach(it => {
//   console.log(it);
// });

const uname = "ABES Engineering College"
for( let i of uname)
  console.log(i)

const map = new Map();
map.set("py", "python");
map.set("js","java skript");
map.set("cpp","cpp");
map.set("java","java");

for (const x of map ){
  console.log(x[0])
}
for(const[ext ,lname] of map){
  console.log(`the ${lname} has .${ext } extension`)
}


const stud = {
  name: "vinay",
  roll:25,
  branch: "cse",
  sec: "A", 
};
for( x in stud ){
  console.log(stud[x]);
}

const labfiles = [
  {
    lang: "c ++",
    ext: ".cpp",
  },
  {
    lang: "rust",
    ext: ".r",
  },
  {
    lang: "javascript",
    ext: ".js",
  },  
  {
    lang: "bhojpuri",
    ext: ".bj",
  },
];

for (let file of labfiles) {
  console.log(`The ${file.lang} files save with ${file.ext}`);
}

// for each loop
//arrayname.foreach

// labfiles.forEach((item)=>{
// console.log(item.lang); console.log(item.ext);
// })

labfiles.forEach((item) => {
  console.log(`${item.lang} : ${item.ext}`);
});

//new array
const prices = [
  1200,15000,4500,4599,69,6009
];

const findNewprice = (prices,discount) => {
    const updatePrice = prices.map((price)=>{ //map pure array ke liye lagu hota hai
      if(price > 1000) return price - (price*discount)/100;
      return price;
    });
  return updatePrice;
};

console.log(findNewprice(prices,50));
// console.log(newPrice)

const filterPrices = prices.filter((price) => price > 1000);
console.log(filterPrices); // filter condition filter kar ke ek new arr return krta h