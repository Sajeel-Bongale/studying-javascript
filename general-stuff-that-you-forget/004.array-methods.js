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


 */