/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649505#overview

    Babel is used to transpile our code back to ES5 standards. This is because even though the JS has come a long
    way in the recent years, there are still many people who use older browsers like Internet Explorer which lag
    behind in implementing these standards. To make our code run in all environments we go through the transpilation
    process which reverts the code back to ES5 standards.

    Parcel actually automatically uses Babel to transpile our code. This is the default setting.

    Babel works with plugins and presets. A plugin is basically a specific JS feature that we want to transpile. For
    example, if we want to transpile an arrow function we will set that plugin to true in the configuration. However,
    it will rarely happen that you want only a single plugin like arrow function transpilation to be true while not
    transpiling any other features of your code base. Babel provides presets for this purpose. A preset is a group
    of plugins bundled together. It will provide a complete transpilation process to your desired target level of JS.
    The default preset that Babel uses is called @babel/preset-env.

    If we run npm start on our project in the previous lesson and observe the resultant code generated in the dist
    folder, we find that there are no uses of let, const and even the template literals have been removed and replaced
    with concat methods on strings. This means that the entire code base has been changed to use ES5 constructs.
    NOTE: this only happens in v1 of parcel. Since v2, parcel now generates resultant ES6 code bases.

    Certain features like arrow functions which can be made into ES5 counterparts are simply replaced with them.
    However, for things like methods which have a concrete implementation and cannot be simply replaced remain
    in the code base even after transpilation.

    Now, if the old browser has not implemented these features, we need to go a step further and ensure that they
    will run in such browsers. This step of converting entities that cannot be simply replaced with older code but
    need new concrete implementations that old browsers understand need a step called polyfilling to properly replace
    and make them work in old browsers.

    Essentially Babel can only convert syntax to older versions of JS like arrow functions, const and spread operators.
    For all other purposes of converting code implemented in the newer versions we use polyfilling.

     Babel used to do polyfilling out of the box some time ago but recently they started to recommend another library.

    You will need to import the core-js library to add polyfilling to the build process. Once installed, Babel will
    transpile and polyfilll the code when you add the import of the core-js library in your script.

    What happens during the build process is that methods like find which are only available on ES6 compliant browsers
    are implemented on the Array.prototype object, so that even old browsers can now use them. Similarly, it will also
    implement features like Promises so that they are made backward compatible.

    This step is skipped if core-js polyfilling library is not present in the project.

    There is one final library called regenerator-runtime that you need to install. This library polyfills async
    functions. Include this in your imports in the main script file.

 */

// NOTE: The files we will be using for this demonstration are the same as the ones you used in the previous lesson
// Specifically in the following location
// 017.modern-javascript-development-modules-tooling-and-functional/008.bundling-with-parcel-and-npm-scripts
