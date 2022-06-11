/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649477#overview

    Besides native ES Modules and the module pattern, there are also other module systems that have been used
    by JavaScript in the past. But they were not native JavaScript. so they relied on some external implementations.

    Two such examples are: AMD Modules and CommonJS modules.

    We will take a look at CommonJS modules in this section.

    CommonJS modules are important for us, because they have been used in Node.js, for almost all of its existence.
    Only very recently have ES modules been introduced in NodeJS.

    NodeJS is a way of running JavaScript on a web server, outside of a browser. The big consequence of this is that
    almost all the modules in the npm repository that we can use in our own code, still use the CommonJS module system.

    The reason for that is that npm was originally only intended for node which uses CommonJS. Only later npm became
    the standard repository for the whole JavaScript world.
    So now we are basically stuck with CommonJS.

    Just like in ES6 modules, one file is one module.

    To export a member outside of the module we use the export keyword followed by a dot. -> See example 1

    To import the method, we will write the name of the method, just like we do in the ES module syntax and then
    use a require with the name of file which is the exporting module. -> See example 2

 */

// Example 1
export.addToCart = function (product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart`);
};

// Example 2
const {addToCart} = require('./file-in-which-export-resides.js');
