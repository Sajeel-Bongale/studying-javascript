/*

    Useful Number methods

    // constructor
    Number() -                                  Number is a primitive wrapper object  used to represent and manipulate
    Params - value                              numbers like 37 or -9.25. Values of other types can be converted to
                                                numbers using the Number() function. It is a double-precision 64-bit
                                                binary format IEEE 754  value. This means it can represent fractional
                                                values, but there are some limits to what it can store.

    parseInt() -                                Parses a string argument and returns an integer of the specified
    Params - valueInString, radix               radix or base. The value must start with a number else the result is
                                                NaN. The default radix is 10. Passing a string with floating point
                                                number in it will result in an integer without the fractional part.

    parseFloat() -                              Parses an argument and returns a floating point number. If a number
    Params - valueInString                      cannot be parsed from the argument, it returns NaN.

    toFixed() -                                 Formats a number such that it becomes a floating point number.
    Params - digits                             Rounds of the newly created number to the number of digits mentioned
                                                in the argument. 0 represents no decimal values. Returns a string
                                                instead of number

    isNaN() -                                   Determines whether the passed value is NaN and its type is Number.
    Params - valueToTest                        It is a more robust version of the original, global isNaN().

    isFinite() -                                Determines whether the passed value is a finite number — that is,
    Params - valueToTest                        it checks that the type of a given value is Number, and the number
                                                is neither positive Infinity, negative Infinity, nor NaN. This is
                                                a better check than isNaN to check if a value is an Number or not.

    isInteger() -                               Determines whether the passed value is an integer.
    Params - valueToTest

*/
