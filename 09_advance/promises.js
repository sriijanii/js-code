const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, nw call
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
    resolve({username: "Afgh", email: "abc@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
console.log(user);

})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
    let error = false
    if(!error){
        resolve({username : "gogo", password :"huhi98",gmail: "fdgg@gmail.com"})
    }else{
        reject('ERROR: Something went wrong')
    }
    },1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
    
})
.catch(function(error){
    console.log(error); 
})
.finally(() => console.log("The promise iseither resolved or rejected"))


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "ygjg", password: "u9u9g", email : "adfdf@gmail.com"})
        }
        else{
            reject("ERROR : JS went wrong")
        }
    }, 1000)

});

async function consumePromiseFive(){
 try {
    const response =  await promiseFive
    console.log(response);

 } catch (error) {
    console.log(error);
    
 }
}
 consumePromiseFive()

//  async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
        
//     }
    
//  }
//  getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error))