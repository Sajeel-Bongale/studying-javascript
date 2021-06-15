/*
    Arrow functions do not have their own this. They get their this from the immediate parent scope.

    Function declaration:
    function doStuff() {};

    Function expression:
    const doStuff = function() {}  -> Think: expression has equals sign E = E

    Object.assign is used for creating shallow copies of objects
    (NOT reference copies which you get by doing:
        let obj = {a:1}
        let refCopyObj = obj
    Shallow copies make separately referenced objects)
    Object.assign(targetObj, ...sourceObjs) returns the target obj
    This only creates a shallow copy in the sense that it does not copy deeply nested properties.
    For copying deeply nested properties you need a deep copy which can be done by external libraries
    like lodash
 */
