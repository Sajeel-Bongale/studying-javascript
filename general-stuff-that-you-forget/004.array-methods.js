/*

    Useful Array methods

    slice() -                                   Returns returns a shallow copy of a portion of an array into a new
    Params - startIndex, endIndex               array object  between the start(inclusive) and
                                                end(excluding) indexes, or to the end of the array.
                                                Does not mutate array.

    splice() -                                  Changes the contents of an array by removing or replacing existing
    Params - start, deleteCount                 elements

    reverse() -                                 Reverses an array in place. The first array element becomes the last,
                                                and the last array element becomes the first.

    concat() -                                  Merges two or more arrays. This method returns a new array.
    Params - value0, value1, ...

    join() -                                    Returns a new string by concatenating all of the elements in an array
    Params - separator                          separated by commas(default) or a specified separator string

    map() -                                     Creates a new array populated with the results of calling a provided
    Params - mapper callback                    function on every element in the calling array

    filter() -                                  Creates a new array with all elements that pass the test
    Params - filter callback                    implemented by the provided function


    reduce() -                                  Executes a user-supplied “reducer” callback function on each element of
    Params - reducer callback, accumulator      the array, passing in the return value from the calculation on the
                                                preceding element. The final result of running the reducer across all
                                                elements of the array is a single value.

    push()                                      Adds one or more elements to the end of an array and
    Params - ...elements                        returns the new length of the array.

    pop() -                                     Removes the last element from the array and returns it

    unshift() -                                 Adds one or more elements to the beginning of an array and
    Params - ...elements                        returns the new length of the array.

    shift() -                                   Removes the first element from an array and returns that removed element.
                                                This method changes the length of the array.


    indexOf(), lastIndexOf() -                  Returns the first/ last index of passed searchElement in current array
    Params - searchElement, fromIndex?          and returns -1 if not found. Tests for equality.

    find(), findIndex() -                       Returns the value/ index of the first element in the provided array
    Params - find callback                      that satisfies the provided find function. Tests for condition

    includes() -                                Determines whether an array includes a certain value among its entries,
    Params - searchElement, fromIndex?          returning true or false as appropriate. Tests for equality.

    some(), every() -                           Tests whether at least one/ every element(s) in the array pass the test
    Params - search callback                    implemented by the provided function. It returns true if, in the array,
                                                it finds an element for which the provided function returns true;
                                                otherwise it returns false. It doesn't modify the array.
                                                Tests for condition

    flat() -                                    Creates a new array with all sub-array elements concatenated into it
    Params - depth                              recursively up to the specified depth.


    flatMap() -                                 Returns a new array formed by applying a given callback function to
    Params - map callback                       each element of the array, and then flattening the result by one level.

    sort() -                                    Sorts the elements of an array in place and returns the sorted array.
    Params - sort callback                      The sort callback helps to sort non string or complex values.
*/


