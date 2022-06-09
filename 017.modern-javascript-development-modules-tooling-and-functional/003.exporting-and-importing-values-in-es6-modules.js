/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649463#overview

    We will see how importing and exporting ES6 modules works in JS.

    We will create modules and link them using the import and export syntax. For this, we create two files with the
    names script.js and shoppingCart.js. As is convention, module files are named in camelCase.

    We will now import the shoppingCart module inside the script.
    //Does not work for me:
    Note that we did not have to specify the .js
    extension while importing the module as JS understands this by itself.

    script.js will be the main file which will import the shoppingCart module.

    We will then create an index.html which will be loaded when the browser starts up. This file has a simple script
    tag that pulls in the script.js file. The script tag initially has no attributes other than src.

    To run and test this open a live server like http-server on the command line at the root of the folder path
    mentioned in the NOTE below and open the browser to the specified location.

    On opening the index.html you will find that the code does not work as expected. In fact it throws an error:
    script.js:1 Uncaught SyntaxError: Cannot use import statement outside a module

    To solve this issue we need to add type="module" to the script tag to let it know that we are pulling in an
    ES6 module instead of a normal script.

    Now the code is working properly. We can observe the console log statements. We find that the exported module
    is executed before the importing module. This is line with the lesson from the previous section.

    We will create a couple of variables in the shoppingCart named shippingCost and cart. As we saw previously, these
    variables are not directly accessible in the script.js because they have not yet been exported.

    There are two ways to export items from a module i.e. named export and default export. Named exports are the
    easiest way to make items in a module public. To do a named export simply add the keyword export in front of
    the variable you want to export. -> See example 1

    To import the named variables you simply add an import in the script.js file as
    import {addToCart} from "./shoppingCart";

    Just like imports, exports too need to be done in the top level code. They cannot be done inside of functions
    or conditionals like if.

    If you want to export multiple items from within a module you can do so using the object export notation. You can
    import the values on the same way as you did for the function addToCart. -> See example 2

    You can also change the names of the values that are being imported during the import process by using the as
    keyword. -> See example 3

    Similarly we can also change the names of the values while exporting them. -> See example 4

    There is a provision to import all the exported members of a module into the importing module using the star(*)
    notation. We use an appropriate name for the object that is created as a result of the export. -> See example 5

    Usually, we use default exports when we only want to export one thing per module. That's the reason why they are
    called default.

    For creating a default export we will simply use the keywords export default in succession and add whatever value
    we want to export in front of it. It can be primitive value or any object, array or function. -> See example 6

    To import it we can use the import name from file syntax. -> See example 7

    As we saw we can mix named and default exports from the same module at the same time. It is however a bad practice.

    As exported values change, so do the ones imported in the importing modules. There is a live connection between
    the two modules and the imported modules will always reflect the current state of the exports.

 */

// NOTE: The files script.js and shoppingCart.js reside in a folder with the same name as this file:
// Specifically in the following location
// 017.modern-javascript-development-modules-tooling-and-functional/003.exporting-and-importing-values-in-es6-modules
