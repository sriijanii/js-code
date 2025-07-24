const name = "gogo"
const repoCount = 90
const age = 8
console.log(name + repoCount + "Value");
console.log(`Hi my name is ${name} and my age is ${age}`);

const gameName = new String('hify');
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('i'));
const newString = gameName.substring(1,3)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);


const newStringOne = "     hiiii   ";
console.log(newStringOne);
console.log(newStringOne.trim());//trim removes extra white spaces

const url = "https://srijani.com/srija%20das"
console.log(url.replace('%20', '-'));

console.log(url.includes('sia'));
const gameN = new String('hi-how-are-u');
console.log(gameN.split('-'));









