//const tinderUser = new Object()//singleton object
const tinderUser = {}//non singleton object

tinderUser.id = "ryt6"
tinderUser.name = "lala"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const RegUser = {
    email : "jhh@gmail.com",
    fullname: {
        username: {
            firstname: "jam",
            secondname: "yoyo"

        }
    }
}
//console.log(RegUser.fullname.username.firstname);
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({},obj1, obj2)
const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const user = [
    {
       id: 1,
       email: "tfhf@gmail.com"
    },
    {
       id: 2,
       email: "hf@gmail.com"
    }
]

user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    coursename: "JS",
    price: "999",
    teacher: "jojo"
}
//course.coursename

const {coursename: cname} = course
console.log(cname);

{
    "name": "jhjkjh",
    "cousename": "js",
    "price": "free"
}

[
    {},
    {},
    {}
]