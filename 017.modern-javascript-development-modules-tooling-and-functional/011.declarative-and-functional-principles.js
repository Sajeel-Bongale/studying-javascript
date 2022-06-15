/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/24607008#overview

    There are two fundamentally different ways of writing code in programming, which we also call paradigms. They are:
    Imperative code
    Declarative code

    Whenever we write imperative code, we need to explain to the computer how to do a certain things. Basically, we
    need to explain every single step that the computer needs to follow in order to achieve a certain result.

    For a real world example, let's say that we want someone to bake a cake for us. If we would do that in an
    imperative way, we would tell the person exactly the step by step recipe that they would have to follow in order
    to bake that cake.

    On the other hand,in declarative programming, the programmer tells the computer only what to do. So, when we write
    declarative code we simply describe the way that the computer should achieve a certain result. But the how it
    should do it part which is the step by step instructions get abstracted away so we do not care about them.

    Declarative paradigm is gaining popularity in JS and it has resulted in the creation of of a sub paradigm called
    functional programming.

    Functional programming is a declarative paradigm which is based on the idea of writing software simply by combining
    multiple so called pure functions while avoiding side effects and mutating data.

    A side effect is a modification of any data that's outside of a function. For example, mutating any variable that
    is external to the function is causing a side effect. Data does not only refer to variables. Logging stuff to the
    console or changing something in the DOM also amounts to side effects.

    A pure function is a function without side effects. A function that does not mutate any external variables, and
    that does also not depend on any external variables.

    And finally, we also see that functional programming is about avoiding mutating data. We do that by using something
    called immutability. In functional programming state is never modified.

    Let's say that we have some application and we have an object there to keep track of all the data that we need in
    it. We usually it called state. In functional programming, that state is never modified. Instead, what we do is to
    create a copy of that object and then it is that copy that is mutated and returned.

    Implementing all these concepts in a JS program is not always possible so we make use of a mixed paradigm approach.
    However, you should ensure that you use declarative and functional paradigm constructs, such as spread operators,
    template literals, ternary operators, etc, when writing your code.

 */

