/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648999#overview

    One of the most important things when building any website is performance. Images have by far the biggest impact
    on page loading. So it's very important that images are optimized on any page. For that, we can use a strategy
    called Lazy Loading Images.

    Basically the idea behind lazy loading images is that we first load a small sized(both in terms of dimensions
    and file size) image. Then as we scroll to one of these low resolution images we will then replace this low
    resolution image with the one specified in the data-src attribute(which is the one with the original resolution
    and file size).

    We will use the intersection observer one more time.

    We will select all the images, that we want to lazy load using the data-src attribute. The images that need
    to be loaded lazily have these attributes mentioned on them. -> See example 1

    Then we create the image observer. After that we will add the selected images as targets to the observer by
    running a forEach loop over all the images. -> See example 2

    To change the image, we will create write our logic in the loadingImage callback handler passed to the
    intersection observer. In this we will get a single entry as we have set a single threshold. We will create
    a guard clause that disallows the logic to be run when the element is not intersecting the root. Finally,
    we will add the logic to change the src attribute to the value held in data-src. Now, this alone does not
    make the image instantly visible, as we still have the blur filter applied on the image. We will need to
    remove it once the image load completes. For this, we need to add an event listener to the image and listen
    for the load event. Once the image has completed loading, we can remove the blur filter. -> See example 3

    We can then remove the observer as a good cleanup practice once the lazy load activity is complete.

    Finally, one thing to understand here is that the low resolution images help in loading the page faster.
    However, for a nice user experience the user should not be aware that new images are being loaded in the
    background, i.e., ideally the user should never have to see the blur filter. To achieve this, we should
    start lazy loading images before the user reaches the threshold of the image. We can get this by adding
    a root margin, just as we did at the end of the section, sticky navigation with intersection
    observer. -> See example 4

 */


// Example 1
const images = document.querySelectorAll('img[data-src]');
console.log(images); // prints a NodeList of 3 elements

// Example 3
const loadingImage = function (entries, observer) {
    const [entry] = entries;
    if(!entry.isIntersecting) return;

    // Replace src with data-src
    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener('load', function () {
        entry.target.classList.remove('lazy-img');
    });

    observer.unobserve(entry.target);
};

// Example 2
const imageObserver = new IntersectionObserver(loadingImage, {
    root: null,
    threshold: 0,
    // Example 4
    rootMargin: '200px'
});
images.forEach(image => {
    imageObserver.observe(image);
});
