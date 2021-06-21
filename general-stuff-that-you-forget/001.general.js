/*
    Arrow functions do not have their own this. They get their this from the immediate parent scope.

    Function declaration:
    function doStuff() {};

    Function expression:
    const doStuff = function() {}  -> Think: expression has equals sign E = E

    Iterables are arrays, sets, strings, maps BUT NOT objects. Spread operator works on iterables
    (After 2018 they work on objects too)

    Shallow copying

    Object.assign is used for creating shallow copies of objects
    (NOT reference copies which you get by doing:
        let obj = {a:1}
        let refCopyObj = obj
    Shallow copies make separately referenced objects)
    Object.assign(targetObj, ...sourceObjs) returns the target obj
    This only creates a shallow copy in the sense that it does not copy deeply nested properties.
    For copying deeply nested properties you need a deep copy which can be done by external libraries
    like lodash

    Spread operators can also be used to create shallow copies
    const main = [1, 2, 3]
    const mainCopy = [...main]


    // TODO Write the different ways for array traversal using different for loops
    1. Regular for loop

    2. for...of loop for array traversal

    3. forEach loop


    // TODO Write different ways for Object traversal

    For keys: Object.keys(myObj) and then for...of loop
    For values: Object.values(myObj) and then for...of loop
    For values: Object.entries(myObj) and then for...of loop
 */
