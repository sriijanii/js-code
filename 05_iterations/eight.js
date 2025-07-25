//reduce

const myNums = [1,2,3]

const newNum = myNums.filter ( (num) => num + 45 )

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc}  and currval: ${currval}`);
    
//     return acc + currval
// }, 3)

const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0 )

console.log(myTotal);

const shoppingCart = [
{
    itemName: "js-couse",
    price: 7889
},
{
    itemName: "java-couse",
    price: 788
},
{
    itemName: "css-couse",
    price: 7800
},
{
    itemName: "c-couse",
    price: 7889
},
{
    itemName: "c++-couse",
    price: 6789
},
{
    itemName: "py-couse",
    price: 6789
},
{
    itemName: "rb-couse",
    price: 7670
}
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);
