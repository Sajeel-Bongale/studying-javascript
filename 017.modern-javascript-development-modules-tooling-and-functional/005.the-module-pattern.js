/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649469#overview

    The ES6 module pattern was recently introduced into JS. That does not mean that modules did not exist before ES6.

    The way in which they were implemented differed. The end goals of both the new and the old module patterns are the
    same. They aim to encapsulate functionality, to have private data, and to expose a public API.

    In the old way of building modules the best method of achieving all that was by simply using a function,
    because functions give us private data by default and allow us to return values, which become our public API.

    We create a function, more specifically an IIFE because it ensures that our function is only created and called
    once because our goal is to create a module like function. -> See example 1

    It also ensures that our data is scoped and it does not bleed into the global namespace unless exposed.

    We will create an IIFE similar to that of shoppingCart module which we did in the third lesson of this
    module. -> See example 2

    Now to make the items public, or to generate the public API, we will need to expose the variables and functions
    to make them available outside of this IIFE. To do so we return an object from the IIFE with the variables and
    functions as the returned members. -> See example 3

    The returned value disappears as soon as we run this function because we are not storing it anywhere.
    To store it we create a variable and populate it with the return value of the function call.

    Then we can add items to the cart using the addToCart function exported by the IIFE. -> See example 4

    The reason why the returned members have access to all the data from with the functions is because of closures.

    This is how the module pattern works and and it has been working very well for a long time for developers,
    long before ES6 modules even existed in JavaScript.

    The problem is that if we wanted one module per file, like we have with ES6 modules, we would have to create
    different scripts and link all of them in the HTML file.

    That then creates a few of problems:
    We have to be careful with the order in which we declare them in HTML,
    We must ensure that all of the variables are in the global scope,
    Finally, we also can't bundle them together using a module bundler.

    Using a module bundler is very important in modern JavaScript.

    So the module pattern that we just learned about does indeed work quite good, but it has some limitations.

    And that's why native modules were added to the language in ES6.

 */

// Example 1
const shoppingCart = (function () {

    // Example 2
    const cart = [];
    const shippingCost = 10;
    const totalCost = 237;
    const totalQuantity = 23;
    const discount = 10;

    const addToCart = function (product, quantity) {
        cart.push({product, quantity});
        console.log(`${quantity} ${product} added to cart`);
    };

    const orderStock = function (product, quantity) {
        console.log(`${quantity} ${product} ordered from supplier`);
    }

    // Example 3
    return {
        addToCart,
        cart,
        totalQuantity,
        totalCost
    }

})();

// Example 4
shoppingCart.addToCart('apple', 4);
shoppingCart.addToCart('pizza', 2);
