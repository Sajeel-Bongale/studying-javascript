// Exporting module
console.log("Exporting module");

const shippingCost = 10;
const cart = [];

// Exporting the function addToCart to make it available outside of this module
// Example 1
export const addToCart = function (product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart`);
};

const totalCost = 237;
const totalQuantity = 23;
const discount = 10;

// Example 2
export {
    totalCost,
    totalQuantity as tq,
    discount
};

export default function (product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart`);
};