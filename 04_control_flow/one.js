// if statement
// const isUserLoggedIn = true
// if (isUserLoggedIn){

// }

if ( 3 != 2){
    console.log("executed");
}

// if (2 == "2"){
//     console.log("executed"); 
// }
// if (2 === "2"){
//     console.log("executed"); 
// }
// if (2 != 3){
//     console.log("executed"); 
// }

const temperature = 32
// if (temperature === 32){
//     console.log("less than 50");
    
// }else {
// console.log("greater than 50");
// }
// const score = 600
// if (score > 100){
//     const power = "fly"
  
// }
// console.log(`User power: ${power}`);

// const balance = 1999
//  if (balance > 500) {
//     console.log("test");

    // if (balance > 500) console.log("test"),
    // console.log("test2");

//     if (balance < 500){
//         console.log("less than 500");
        
//     }else if (balance < 750){
//         console.log("less than 750");
//     }else if (balance < 900){
//         console.log("less than 900");
//     }else {
//         console.log("less than 1200");
//     }
    
//  }

const userLoggedIn = true
const debitCard = true
const loggedFromGoogle = true
const loggedFromGmail = false

if(userLoggedIn && debitCard){
    console.log("Allowed to buy course");
    
}
if (loggedFromGoogle || loggedFromGmail||userLoggedIn){
    console.log("loged in "); 
}