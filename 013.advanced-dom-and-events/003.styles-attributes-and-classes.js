/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648951#overview

    To set a style on an element we get the element, then call the style property and then whichever
    style property like color or width you want to change and set it to a value. -> See example 1

    Remember that the styles you set like this are set as inline styles.

    It might appear that we can extract styles in this manner by requesting the style values just
    as we set them in example 1. However, that is not the case. The style properties return values
    only when we have manually set them using the statements mentioned in example 1. This also means
    that even if values have been set from a class they will appear as blank in console logs-> See example 2

    To get the values of properties that have not been set manually or have been set from within a
    class, we can use the getComputedStyle method provided by the DOM. It returns an object that
    has all the set CSS property values. -> See example 3

    In cases where you want to modify a value that is set by the browser (like the height property),
    you can use the getComputedStyle method to your advantage to get the existing height and add or
    subtract values from it. -> See example 4

    CSS provides the ability to define variables in our stylesheets. We have the ability to change
    these properties using JS. We first need to identify where these properties are declared. If
    we look at the file 000.setup-data.css we can see that the variables are declared on the root
    element. This root element is essentially the document.documentElement that we identified in
    the previous section.

    On this element is the style property which holds the styles which are set on the entire document.
    We can use the setProperty method on the style property by passing it the name of the CSS variable
    and the value as arguments. -> See example 5

    In HTML pages, elements have attributes attached to them. We can access and change these attributes
    using JS. They appear as properties on the JS objects in the DOM. -> See example 6

    Since we add properties to the HTML, they automatically get inserted to the DOM. Similarly, some
    properties like src get created on elements like img since they are needed for displaying images.

    However, if we add non-standard properties to the HTML elements, they will not be reflected in
    the JS DOM. -> See example 7

    There is, however, a way to obtain the values set using custom properties. We use the getAttribute
    method and pass the name of the custom property. -> See example 8

    Just as we can get the attribute values, we can also set them. -> See example 9

    There is also a provision of adding custom attributes to the element using the setAttribute
    method by passing the name of the attribute and its values as arguments. -> See example 10

    Requesting the src attribute using element.src syntax returns the absolute value of the image path.
    However, if you want only the relative path you use the getAttribute method with the src property
    as argument. -> See example 11

    Similar behaviour is exhibited by the href attribute and can be tackled in the same way as
    mentioned above. -> See example 12

    HTML provides special kind of attributes called data attributes. These attributes start
    with the word data. They can be added to any element to provide additional information about
    the element. These attributes are then available on the dataset property on the JS object
    of the element. You can access your custom elements using camel case property names on this
    dataset property. -> See example 13

    The DOM interface also provides the ability to interact with the classes of an element using
    the classList property. The main methods that you will use are add, remove, toggle and contains.
    You can pass multiple arguments to the add and remove methods. -> See example 14

 */

// NOTE: Run the 000.setup-data.html project in the browser to observe the console logs
// Included with the html is the CSS file as well as this JS file

// Styles, Attributes and Classes

// Styles
let cookieMessage = document.querySelector('.cookie-message');

// Example 1
cookieMessage.style.backgroundColor = '#37383d';
cookieMessage.style.width = '90%';

// Example 2
console.log(cookieMessage.style.color); // prints nothing as we have not manually set the color property on style
console.log(cookieMessage.style.backgroundColor); // prints rgb(55, 56, 61) as we have set it ourselves

// Example 3
console.log(getComputedStyle(cookieMessage).color); // prints rgb(187, 187, 187)
console.log(getComputedStyle(cookieMessage).height); // prints 49px

// Example 4
cookieMessage.style.height =
    Number.parseFloat(getComputedStyle(cookieMessage).height) + 30 + 'px' // changes height based on current height

// Exmaple 5
document.documentElement.style.setProperty('--color-primary', 'orangered');


// Attributes
const logo = document.querySelector('.nav__logo');

// Example 6
console.log(logo.alt); // prints Bankist logo
console.log(logo.className); // prints nav__logo

// Non-standard
// Example 7
// If we add a designer="Jonas" property to the logo element in the HTML and then do the following
console.log(logo.designer); // prints undefined because JS does not recognize custom properties set like above

// Example 8
console.log(logo.getAttribute('designer')); // prints Jonas

// Example 9
logo.alt = 'Beautiful minimalist logo';

// Example 10
logo.setAttribute('company', 'Bankist');

// Example 11
console.log(logo.src); // prints absolute path with domain name
console.log(logo.getAttribute('src')); // prints relative path without domain name

const link = document.querySelector('.nav__link--btn');

// Example 12
console.log(link.href); // prints absolute path with domain name
console.log(link.getAttribute('href')); // prints just # (relative path without domain name)

// Data attributes
// Example 13
// We add a data-version-number="2.0" property to the logo element in the HTML
// then we can access it as follows
console.log(logo.dataset.versionNumber); // prints 2.0


// Classes
// Example 14
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes

// Don't use
logo.clasName = 'jonas'; // this will replace all existing classes with just this single class
