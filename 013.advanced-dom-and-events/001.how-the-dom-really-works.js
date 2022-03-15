/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648939#overview

    What is the DOM?
    The DOM is the interface between our JS code and the browser. It allows JS to interact with the browser.

    Using the DOM we can create, modify and delete elements; set styles, classes and attributes and
    listen and respond to elements.

    The DOM tree is generated from any HTML document which we can then interact with. It provides many properties
    and methods for this purpose.

    The DOM is made up of different type of nodes. Some nodes are HTML elements, while some are just plain text.

    How the DOM is organized behind the scenes?
    Every single node in the DOM tree is of the type Node. This Node is represented in JS by an object. This object has
    properties like textNode, childNode, parentNode and methods like cloneNode.

    Now we know that there are different types of Nodes. These are child types of the Node. They are Element, Text,
    Comment and Document.

    For example, whenever there is text inside an element, it gets assigned a Text Node in the DOM. Similar thing
    happens for the HTML comment.

    For elements themselves, there is the Element Node and this gives it access to several properties like innerHTML,
    children, classList and methods like append, remove, setAttribute, querySelector. Each element will be represented
    internally as an object.

    The Element type internally has an HTMLElement child type and that has one child type for each kind of HTML
    element(p, span, div, section, etc. ) that can be created on a webpage. Such a structure where one type represents
    one HTMLElement is necessary because each type of element may have different kinds of unique properties. For
    example, img elements have the src attributes, a elements have the href attribute which do not exist on others.

    The bottommost elements gain access to all the properties and methods from the parent elements by virtue of
    inheritance.

    The Document is another type of Node that is available in the DOM. It has some methods which are common to
    the Element node such as querySelector, getElementById, etc.

    The final piece of the DOM tree is the EventTarget which is the parent of both, the Node type and the Window.
    It is a special node type. It has the addEventListener and removeEventListener methods on it. As a result of
    this type being at the top of the hierarchy we are able to call add and remove event listener methods on any
    node that exists in our DOM tree.

 */
