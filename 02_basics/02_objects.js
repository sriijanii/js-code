//singleton
Object.create

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "gogo",
    "full name": "dfdgfd jhj",
    age: 23,
    [mySym]:"mykey1",
    location: "Delhi",
    email: "fgfhfh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}

console.log(JsUser.age);
//console.log(JsUser.email);

console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
console.log(JsUser.mySym);
// console.log(JsUser[mySym]);

JsUser.email = "gygg@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "gjhjg@gmail.com"
console.log(JsUser);

//*************FUNCTIONS */
JsUser.greeting = function() {
    console.log("HI JSUSER");
}
JsUser.greeting2 = function() {
    console.log(`HI JSUSER, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());



