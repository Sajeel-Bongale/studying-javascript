// import './shoppingCart.js';

//Importing the addToCart function to be used in the script
// Example 3
import {addToCart, totalCost as price, tq, discount} from "./shoppingCart.js";

// Example 5
import * as ShoppingCart from './shoppingCart.js'

// Example 7
import add from './shoppingCart.js'

// Importing Module
console.log('Importing Module');

addToCart('Bread', 5);

console.log(price, tq, discount);

console.log(ShoppingCart.discount);

add('Pizza', 2);