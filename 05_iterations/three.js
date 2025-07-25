//for of

//["", "", "", ""]
//[{}, {}, {}, {}]

// const arr = [1, 3,4, 5,6]
// for (const num of arr) {
//     console.log(num);
    
    
// }

const greetings = "Hello"
for (const greet of greetings){
    console.log(`Each char is ${greet}`);
    
}

//Maps

// const map = new Map()
// map.set('IN', "India")
// map.set('US',"United States of America" )
// map.set('IN', "India")
//console.log(map);

// for (const [key, value] of map) {
//     console.log(key , ':-', value);
    
// }
// for(const key of map){
//     console.log(key);
    
// }

const myObject = {
    game1 : 'NFS',
    game1 : 'NHL'
}
for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
    
}


