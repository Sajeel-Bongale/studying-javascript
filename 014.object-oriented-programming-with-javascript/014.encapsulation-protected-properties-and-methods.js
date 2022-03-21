/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649109#overview

    There are instances when you want to keep some properties or methods of your class private so that
    they are not available publicly. The public interface is also called the API of the class.

    There are two big reasons why we need encapsulation and data privacy:
    1. To prevent code from outside a class to accidentally manipulate data inside the class.
    2. When we expose only a small interface consisting only of a few public methods then we can change all
    the other internal methods with more confidence. Because in this case, we can be sure that external code does
    not rely on these private methods. Therefore, our code will not break when we make internal changes.

    However, JS classes actually does not yet support real data privacy and encapsulation.
    Here, we will basically fake encapsulation by simply using a convention.

    The first candidate to protect here is the movements array since the movements has mission critical data,
    and we need to protect it so that no one can accidentally manipulate it.
    For now, all we will do is to add an underscore as a prefix to the movements property.

    Again this does not actually make the property truly private because this is just a convention.
    It's something that developers agree to use and then everyone does it this way.

    Since it is not truly private we call this protected.

    You can still access the property directly by using the underscore prefix, but you will know what you
    are doing is incorrect as the property is not meant to be modified publicly.

    You can then add a method or getter that returns the protected property. Using this way you can
    then allow others to access this property in the correct manner. -> See example 2

    You can also protect methods by using the same underscore convention. -> See example 3

 */

class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        // Example 1
        // Protected property
        this._movements = [];
    }

    deposit(val) {
        this._movements.push(val);
    }

    withdraw(val) {
        this._movements.push(-val);
    }

    // Example 2
    get movements() {
        return this._movements;
    }

    // Example 3
    _approveLoan() {
        return true;
    }
}
