/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648975#learning-tools

    DOM traversing is basically walking the DOM.

    To select child elements for a given element in the DOM you first need to get a reference of the parent
    element. -> See example 1

    Once you have the parent element you can use querySelector or querySelectorAll methods to get the child
    elements based on the criteria that you pass as arguments to the methods. This method will not only select
    the direct children of h1 but as far as the DOM goes inside the h1 element's structure. Other highlight
    elements which are not children of the selected h1 tag will not be selected. -> See example 2

    To get all the direct children of the selected element we use the childNodes property. This property includes
    text, comments and HTML element nodes in the result. -> See example 3

    To get only elements(excluding text and comment nodes) you can use the children property. This only works
    for direct children. It returns an HTML collection. -> See example 4

    There are also firstElementChild and lastElementChild properties on the element. -> See example 5

    To go upwards in the DOM and selecting parents we have the parentNode as well as the parentElement
    property. -> See example 6

    Sometimes we may need to find a parent that may not be a direct parent. It could be way up in the
    DOM hierarchy. For such situations, we can use the closest method. -> See example 7

    If you call the closest method with a query selector that matches the element itself, it will return
    that same element without going for a search further. -> See example 8

    To go sideways, ie, select siblings of the current element, you can use nextElementSibling and
    previousElementSibling properties. -> See example 9

    Note: The word Node in the properties will result in any kind of node (element, text or comment). If you
    want to find an element in specific you will need to use the property with the word Element in it. The
    difference can be illustrated in the parentNode and parentElement property names.

    If we want all the siblings for a given element we can go to the parentElement as we saw in example 6 and
    get all the children for this parent element. -> See example 10

 */

// NOTE: Run the 000.setup-data.html project in the browser to observe the console logs
// Included with the html is the CSS file as well as this JS file


// Going downwards: child

// Example 1
const h1 = document.querySelector('h1');

// Example 2
console.log(h1.querySelectorAll('.highlight'));

// Example 3
console.log(h1.childNodes);

// Example 4
console.log(h1.children);

// Example 5
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orange';

// Going upwards: parents

// Example 6
console.log(h1.parentNode);
console.log(h1.parentElement);

// Example 7
h1.closest('.header').style.background = 'var(--gradient-secondary)';

// Example 8
h1.closest('h1'); // Returns same h1 element

// Going Sideways: siblings

// Example 9
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

// Example 10
console.log(h1.parentElement.children);


