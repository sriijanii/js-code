

function sayMyName(){
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("O");
    console.log("O");

}
//sayMyName()

// function addTwoNums(num1, num2) {//parameters
//     console.log(num1 + num2);
    
// }
function addTwoNums(num1, num2) {//parameters
    // let result = num1 + num2
    // return result
    return num1 + num2
    
}

const result = addTwoNums(7,7)
//console.log("Result: ", result);

//addTwoNums(3, 4)//arguments

function loginUserMsg(username = "jira"){
   // if(username === undefined)
   if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMsg("Hirr"))
//console.log(loginUserMsg())

function calcCartPrice(...num1){
    return num1
}
console.log(calcCartPrice(800,688,344,222,5666));

const user = {
    username : "lkkjk",
    prices: 455
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handleObject(user)
handleObject({
    username: "hjhjh",
    price: 888
})

const myNewArray = [799,899,8990,8786]

function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([467,890,468,235,345]));
