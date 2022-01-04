/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648947#overview

    To select the entire document you use document.documentElement. -> See example 1

    If you want to apply CSS styles to the entire page you will need to use the above documentElement property.

    Similarly you can select the head and body as document.head and document.body.

    The above elements do not need the use of querySelector method.

    To get other elements you will use the querySelector method on the document object which will return
    the first matching instance of the selector passed to it. -> See example 2

    To get all the instances you will need to use querySelectorAll method. This returns a NodeList. -> See example 3

    The other element selection method is getElementById to which you will simply pass the id. -> See example 4

    You can also select elements by their tag names using getElementsByTagName. Notice the Element's'
    This method returns a list as an HTMLCollection. HTMLCollections are live lists meaning any changes in
    the DOM are also reflected in the response values. For example if a list of elements of tag button are
    selected using the getElementsByTagName method and saved in a variable, an update (removal or addition)
    of a button to the DOM will be reflected in the variable holding the HTMLCollection. This behavior
    cannot be observed in a NodeList. -> See example 5

    Similar functionality is exhibited by getElementsByClassName method. -> See example 6

    To create an element use the document.createElement method by passing an element name to it.
    This method does not add the element to the DOM. To do so we have to manually insert it there.
    It is simply an element object created for that particular element name.
    You can add classes and other attributes to the newly created element object. -> See example 7

    There are other properties on this element such as textContent and innerHTML too. -> See example 8

    To now add the modified element to the DOM you can call the prepend method on an element inside which
    you want to place the newly created element. The element will be added as a first child of the element
    when you use prepend.  -> See example 9

    To add it to the end you can use the append method.

    One such created element can only be displayed on the DOM once even if you use the prepend and append
    methods in succession. Think of this element like a unique person. Only one of it exists.
    So when you append after prepending it in the DOM in successive steps, it is moved from the beginning
    to the end in the last step.

    To create a copy of the element you will need to clone it using the cloneNode method available
    on it.  -> See example 10
    Now once a copy of the element is created you can use it to insert it at another location in the DOM.

    The other methods to add to the DOM are before and after which add the newly created element as siblings,
    before and after the element on which the method was called.

    To delete elements you will first need to select them using querySelector method.
    Then you can simply run the remove method on the selected element. -> See example 11

    The remove method is a new addition to the API.

    Without it we had to select the parentElement and then call the removeChild on the element we want to delete.
 */

// Selecting, Creating, and Deleting Elements

// Selecting elements
// Example 1
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

// Example 2
const header = document.querySelector('.header');

// Example 3
const allSections = document.querySelectorAll('.section');
console.log(allSections);

// Example 4
document.getElementById('section--1');

// Example 5
const allButtons = document.getElementsByTagName('button');
console.log(allButtons); // Additions and Deletions after this point will be reflected in this variable

// Example 6
console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// Example 7
const message = document.createElement('div');
message.classList.add('cookie-message');

// Example 8
// message.textContent = 'We use cookied for improved functionality and analytics.';
message.innerHTML =
    'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// Example 9
// header.prepend(message);
header.append(message);

// Example 10
// header.append(message.cloneNode(true));
// header.before(message);
// header.after(message);


// Delete elements
// Example 11
document
    .querySelector('.btn--close-cookie')
    .addEventListener('click', function () {
        // message.remove();
        message.parentElement.removeChild(message);
    });