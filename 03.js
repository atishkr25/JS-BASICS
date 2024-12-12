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