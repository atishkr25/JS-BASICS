//Anything in curly braces is called object in js 

const stud = {
  gender: "male",
  "full name": "mohit raj sharma",
  email: "mohit@gmail.com",
  age: 18,
  location:"ghaziabad",
  loginDays: ["sat","sun","Tues"],
  isLogin: false
};
console.log(stud)

stud.name = "mohit sharma";
console.log(stud.name)
console.log(stud["full name"])
console.log(stud["email"])
console.table(stud)
console.log(stud.name)

if(!stud.isLogin){
  console.log(stud.loginDays)
}
// in anything except false, NULL is true in js
if(stud.mobile){
  console.log("mobile is given")
}
// == compare only value
// === compare value and type both

stud.greeting = () => console.log('Hello')
stud.greeting()

const print = (s) => console.log(stud.name)
print(stud)