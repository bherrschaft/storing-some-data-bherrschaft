
let shoppingList = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];


shoppingList.push('fruit loops');


shoppingList[shoppingList.indexOf('coffee')] = 'fair trade coffee';


shoppingList.splice(shoppingList.indexOf('chips'), 2, 'rice', 'beans');


let shoppingCart = [];


shoppingCart.push(shoppingList.pop());


shoppingCart.push(shoppingList.shift());


while (shoppingList.length > 0) {
  shoppingCart.push(shoppingList.pop());
}


shoppingCart.sort().reverse();

console.log(shoppingCart.join(', '));