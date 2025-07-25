//array

// const myArr = [0, 1, 2, 3, 4]
// const myHeroes = ["ghj","hgj","yfj"]
// const myArray = new Array(1,4,6,8)
// console.log(myArr[2]);


//Array methods
// myArr.push(7)
// myArr.push(9)
// myArr.pop()
// console.log(myArr);
// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);
 
//SLICE, SPLICE

// console.log("A ", myArr)
// const myn1 = myArr.slice(1, 3)
// console.log(myn1);

// console.log("B ", myArr)
// const myn2 = myArr.splice(1, 3)
// console.log(myn2);
// console.log("C", myArr);


const marvel = ["uhhks", "hjsjh", "gbhsaj"]
const dc = ["sgd", "dbjh", "dhgbj"]
//marvel.push(dc)
// console.log(marvel);
// console.log(marvel[3][1]);

// const hero = marvel.concat(dc);
// console.log(hero);

// const new_hero = [...marvel, ...dc]
// console.log(new_hero);

const new_Array = [1, 2, 3,[4, 5, 6], 7, [6, 7, [9, 11]]]

const real_array = new_Array.flat(Infinity)
console.log(real_array);

console.log(Array .isArray("Srija"))
console.log(Array.from("Srija"))
console.log(Array.from({name : "srijv"})) 

let score1 = 900
let score2= 7989
let score3 = 899
console.log(Array.of(score1, score2, score3));





