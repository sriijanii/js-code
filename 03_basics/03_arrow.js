const user = {
    username : "ygcf",
    price: 456,

    welcomeMsg: function() {
        //console.log(`${this.username}, welcome to website `);
        //console.log(this);
        
    }
    
}
// user.welcomeMsg()
// user.username = "jkk"
// user.welcomeMsg()

//console.log(this);

// function chai(){
//     let username = "ghdj"
//     console.log(this);
    
// }
// chai()

// const chai = function() {
//     let username = "hhjk"
//     console.log(this.username); 
// }

const chai = () => {
    let username = "hhjk"
    console.log(this); 
}

//explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//implicit return
//const addTwo = (num1, num2) => num1 + num2
//const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "hvhh"})

console.log(addTwo(9,9));


const myArr = [67,89,90,98,95,94]

//myArr.forEach(() => {})
