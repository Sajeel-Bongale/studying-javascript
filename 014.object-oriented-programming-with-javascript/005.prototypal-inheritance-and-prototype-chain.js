/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649055#overview

     Everything starts with the constructor function. Now, this constructor function has a prototype property
     which is an object and inside that object, we define the methods that we want each object to have.

     The prototype object also has a constructor function which is the actual constructor function that we
     built previously. It is like a cyclic chain. So Array.prototype.constructor is going to point to the
     original Array constructor itself.

     When a property or method cannot be found on an object JS will look into its prototype. That is how all the
     properties and methods are searched in any JS lookup.

     This behaviour is known as prototypal inheritance or delegation.

     We can thus call a function or method with the method being present on the actual objects. This helps
     with code performance without having to create copies of the function for each object.

    The ability of looking up properties and methods in a prototype is what we call a prototype chain.

    The prototype chain does not, however end with one object and its constructor function.

    Since the prototype itself is an object and therefore must also have a prototype.
    And the prototype of say, Array.prototype is Object.prototype. i.e.
    Array.prototype.__proto__ === Object.prototype

    This happens because the creation of Array.prototype happened using the Object constructor behind the scenes
    like, new Object().

    So the Object.prototype got chained to the newly created Array.prototype -> this itself is an object.

    Note: Using {} to create objects internally performs doing a new Object(). The {} syntax is a shortcut provided
    by JS for the easy creation of objects without having to write new Object() every time.

    This series of links is called the prototype chain.

    All objects created will eventually have the Object.prototype in their chains as Object is the last and topmost
    class in JS.

    Finally, Object.prototype will always be null as this marks the end of the prototype chain.

 */
