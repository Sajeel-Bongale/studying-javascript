/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648481#overview

    Scoping controls how the variables in our program are organized and accessed by JS.

    JS makes use of lexical scoping, meaning scope is determined by how the functions are placed in the codebase.

    Scope is the environment in which a variable is declared. Global, function and block scope are 3 types.

    All functions create their own scope.

    Every internal scope has access to its parents scope. It uses this hierarchical chain to look for variables.
    It is called as variable lookup.

    For variables declared with var block scopes don't apply at all because ES6 works with only ES6 constructs,
    and block scope is an ES6 construct. These vars become function scoped.

    Functions in strict mode are block scoped.

    Scopes of siblings are not accessible to siblings. see example 2 - line 40
 */

// Example 1 of global and local scope
var globalVar = 'global string'

function local() {
    var localVar = 'local string'
    return localVar
}

if(true) {
    let blockScopedVar = 'not accessible outside block'
}

console.log(globalVar) // Runs properly
console.log(localVar) // Throws error because localVar is a locally scoped variable inside a function
console.log(blockScopedVar) // Throws error because blockScopedVar is a block scoped variable inside if


// Example 2
function megascope() {
    var megaScopeVar = 'megaScopeVar'

    function childScope1() {
        var child1 = 'child1'
        console.log(child2) // cannot access child2 here
        console.log(megaScopeVar) // can access megaScopeVar
    }

    function childScope2() {
        var child2 = 'child2'
        console.log(child1) // cannot access child1 here
        console.log(megaScopeVar) // can access megaScopeVar
    }
    childScope2()

}

