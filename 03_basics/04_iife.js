//Immediately Invoked Function Expressions(IIFE)


(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`); 
})();

//()->function definition 
//()-> execution

( (name) => {
     console.log(`DB CONNECTED TWO ${name}`); 
})('ghjj')