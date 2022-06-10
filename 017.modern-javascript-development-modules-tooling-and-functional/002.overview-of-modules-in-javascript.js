/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649453#overview

    A module is a reusable piece of code that encapsulates implementation details. It is similar to a function or even
    a class, but the difference is that a module is usually a standalone file.

    Obviously, a module always contains some code but it can also have imports and exports. With exports, we can export
    values out of a module, for example, simple values or even entire functions. Whatever we export from a module is
    called the public API.

    This public API is consumed by importing values into other modules. So just like we can export values in modules,
    we can also import those values. These other modules from which we import are then called dependencies of the
    importing module

    As our codebase gets bigger, building modules provides many advantages.

    The first one is that modules make it really easy to compose software. So we can think of modules as small
    building blocks that we can then put together in order to build complex applications.

    Isolating components is another huge advantage of using modules. It means that each module can be developed in
    isolation without the developer having to think about the entire code base.

    Third, modules make it very easy to abstract or code. We can use modules to implement low level code. Then other
    modules, which don't really care about these low level details can import these abstractions and use them.

    Finally, modules allow us to easily reuse code across several projects.

    As of ES6, JavaScript has a native built-in module system. We did have modules before ES6, but we had to implement
    them ourselves or use external libraries.

    In ES6 modules, there is one module per file and one file per module. If we compare this to regular scripts it
    appears that the two are the same. However, this is a significant difference in the two.

    The first difference is that in modules, all top level variables are scoped to the module. So basically variables
    are private to the module by default. The only way an outside module can access a value that's inside of a module
    is by exporting that value. In scripts, on the other hand, all top level variables are always global.

    Next ES modules are always executed in strict mode while scripts on the other hand are executed in sloppy mode
    by default.

    Third, the this keyword is always undefined at the top level while in scripts it points at the window object.

    We can export and import values between modules using this ES6 import and exports syntax. In regular scripts,
    importing and exporting values is just completely impossible.

    In order to link a module to an HTML file, we need to use the script tag with the type attribute set to module,
    instead of just a plain script tag.

    And finally about downloading the module files themselves. This always automatically happens in an asynchronous way.
    This is true for a module loaded from HTML as well as for modules that are loaded by importing one module into
    another, using the import syntax. Regular scripts on the other hand are downloaded by default in a blocking
    synchronous way, unless we use the async or defer attributes on the script tag.

    When running the modules in the browser, the first step is to parse that code. Parsing basically means to just read
    the code without executing it. This is the moment in which imports are hoisted. The whole process of importing (not
    downloading) modules happens before the code in the main module is actually executed. All required modules are
    imported in a synchronous manner. This means that only after all imported modules have been downloaded and executed,
    will the main index.js(main) module be finally executed.

    Note: The above step is only possible because of top level imports and exports because if we only export and import
    values outside of any code that needs to be executed, then the engine can know all the imports and exports during
    the parsing phase. If we were allowed to import a module inside of a function, then that function would first
    have to be executed before the import code happened. And in that case, modules could not be imported in a
    synchronous way.

    Why do we actually want modules to be loaded in a synchronous way?
    The answer is that this is the easiest way in which we can do things like bundling and dead code elimination.
    This is very important in large projects with hundreds of modules that includes third party modules from which we
    usually only want a small piece and not the entire module.

    So by knowing all dependencies between modules before execution, bundlers like webpack and Parcel can then join
    multiple modules together and eliminate that code.

    After the parsing process has figured out which modules it needs to import, then these modules are actually
    downloaded from the server. Remember, downloading happens in an asynchronous way. It is only the importing
    operation itself that happens synchronously. Then after a module arrives, it's also parsed and the modules exports
    are linked to the imports in index.js. These connections or links are live connections. So exported values are not
    copied to imports. Instead, the import is a reference to the exported value, like a pointer. So when the value
    changes in the exporting module, then the same value also changes in the importing module.

    Next up, the code in the imported modules is executed. With the process of importing modules is finally finished.

    And so now, it's time for the importing module to be finally executed as well.

 */
