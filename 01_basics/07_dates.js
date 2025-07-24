//DATES

let myDate = new Date()//instance of myDate
// console.log(myDate.toDateString());
// console.log(myDate.getDate());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

//let myCreatedDate = new Date(2025, 6, 24)
//let myCreatedDate = new Date(2025, 6, 24, 5, 3)
//let myCreatedDate = new Date("2025-07-24")
let myCreatedDate = new Date("06-24-2025")
console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getHours());
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.toLocaleString('default', {
    weekday: "long" 
}));




