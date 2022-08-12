/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649367#overview

    Build image loading functionality.

    PART 1
    1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which
       creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path.
       When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise.
       The fulfilled value should be the image element itself. In case there is an error loading the image
       ('error' event), reject the promise.

    PART 2
    2. Consume the promise using .then and also add an error handler;
    3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
    4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image
       (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a
       global variable for that);
    5. After the second image has loaded, pause execution for 2 seconds again;
    6. After the 2 seconds have passed, hide the current image.

    TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed
    to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

 */

const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;
        img.addEventListener('load', function () {
            imgContainer.append(img);
            resolve(img);
        });
        img.addEventListener('error', function () {
            reject(new Error('Image not found'));
        });
    });
};

let currentImg;

createImage('img/img-1.jpg')
    .then(img => {
        currentImg = img;
        console.log('Image 1 loaded');
        return wait(2);
    })
    .then(() => {
        currentImg.style.display = 'none';
        return createImage('img/img-2.jpg');
    })
    .then(img => {
        currentImg = img;
        console.log('Image 2 loaded');
        return wait(2);
    })
    .then(() => {
        currentImg.style.display = 'none';
    })
    .catch(err => console.error(err));

