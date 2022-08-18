/*

    Promise Combinators

    All combinators take an array of promises as arguments.

    Promise.all
    Returns - A promise that resolves to an array of the results of the input promises
    Resolves - When all of the input's promises have fulfilled
    Rejects -  Immediately upon any of the input promises rejecting
    This combinator needs an error handler to handle rejections as well

    Promise.allSettled
    Returns - A promise that resolves to an array after all of the given promises have either fulfilled or rejected
    Always Resolves with all values in the promise argument, even if success or failure
    Does not require catch handler

    Promise.race
    Returns - Single value as soon as one of the promises in the array fulfills or rejects
    Resolves - With success if the fastest resolving promise was fulfilled
    Rejects - With failure if fastest promise was rejected
    This combinator needs an error handler to handle rejections as well

    Promise.any
    Returns - Single value after first promise is fulfilled
    Resolves - With success when first promise succeeds
    Rejects - With failure when all promises have been rejected
    This combinator needs an error handler only for the condition when all promises have been rejected

 */
