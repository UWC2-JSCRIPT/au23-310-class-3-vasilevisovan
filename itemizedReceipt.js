// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price

const logReceipt = (...items) =>{
      let total = 0;
      items.forEach((item)=>{
        total+=item.price
        console.log(item.description)
      })
      console.log(total)

}

const obj1 = {description : 'Kebab', price : 17.99 }
const obj2 = {description : 'Shawarma', price : 19.99 }
const obj3 = {description : 'Fish', price : 12.99 }
const obj4 = {description : 'Chips', price : 7.99 }
console.log(logReceipt(obj1, obj2, obj3, obj4));
// Check
/*logReceipt(
  { descr: 'Burrito', price: 5.99 },
  { descr: 'Chips & Salsa', price: 2.99 },
  { descr: 'Sprite', price: 1.99 }
);*/
// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Total - $10.97
