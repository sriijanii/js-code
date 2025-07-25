const myNums = [1,3,5,7,9]

// const newNums = myNums.map( (num) => num + 10)
// console.log(newNums);


//chaining
const newNums = myNums
                .map((num) => num * 10 )
                .map((num) => num + 1 )
                .filter( (num) => num >= 40)
console.log(newNums);