/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649073#overview

    Every object in JS can have setter and getter properties and they are called accessor properties
    and the normal ones are called data properties.

    Getters and setters are basically functions that get and set a value. On the outside they still
    look like regular properties.

    To create a getter we simply add the get keyword before creating a method that returns
    the desired value. -> See example 1

    Now we can use this getter like account.latest. We use it as a property.
    So we don't call the method, but instead we write it as if it was just a property. -> See example 2

    We can also create a setter for the modifying values. A setter takes one parameter of the value
    that needs to be modified. -> See example 3

    It is not mandatory to create a setter for a property with a getter and vice versa. They can be present
    individually as needed.

    To call the setter we would have to do account.latest and then call it with the movement, say 50.
    But now this is actually like a property and not a method. So we can simply set it just like we
    set any other property. So we set it equal to 50. -> See example 4

    We can add getters and setters to the class too. They will then be available on all objects created
    using the new key word. -> See example 5

    The getter method gets added to the prototype object when created inside the class. You can also see
    the property called age that is created in example 5 when you log the newly created object from this class
    using the console. It appears with 3 dots (...). You can click it to show the value held in it.
    It is lazily calculated.

    Getters and setters can be used for data validation.

    We can create a setter for a full name property that verifies if the value passed to it has a space
    in between. However, this behaviour may result in a cyclic loop is we set the same property name in the setter that
    we have created. -> See example 6

    To avoid the recursive calls we should set the property to a name that is different from the name of
    the setter. The usual convention is to prepend the setter name with an underscore(_). -> See example 7

    The property with the name _fullName has the value stored in it. Now this causes the issue of your fullName
    property being undefined on the object. Therefore, we need to create a getter that returns the actual fullName
    stored in _fullName. -> See example 8

    You can create objects using this class and they will have all the getters and setters in the
    prototype. -> See example 9

 */

const account = {
    owner: 'Jonas',
    movements: [200, 530, 120, 300],
    // Example 1
    get latest() {
        return this.movements.slice(-1).pop();
    },

    // Example 3
    set latest(mov) {
        this.movements.push(mov);
    },
};

// Example 2
console.log(account.latest) // prints 300

// Example 4
account.latest = 50;
console.log(account.movements) // prints [200, 530, 120, 300, 50]


class Person {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Example 5
    get age() {
        return 2037 - this.birthYear;
    }

    // Example 6
    // set fullName(name) {
    //     if (name.includes(' ')) this.fullName = name; -> Setting the same property will result in a recursive call
    //     else alert(`${name} is not a full name!`);
    // }

    // Example 7
    set fullName(name) {
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    // Example 8
    get fullName() {
        return this._fullName;
    }
}

// Example 9
const walter = new Person('Walter White', 1965);
console.log(walter.fullName); // prints Walter White
console.log(walter.__proto__) // should have the fullName getter and setter in the console(in browser)
