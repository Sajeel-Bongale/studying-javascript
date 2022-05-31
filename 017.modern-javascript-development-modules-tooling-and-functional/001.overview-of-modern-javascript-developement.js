/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649441#overview

    In earlier days, we used to write all our JS code into one big script or maybe multiple scripts.
    But today, we divide our projects into multiple modules and these modules can share data between them and make
    our code more organized and maintainable.

    One great thing about modules is that we can include 3rd-party modules into our own code. There are thousands of
    open source modules, which we also call packages, that developers share on the NPM repository.

    NPM stands for Node Package Manager and it is the go to repository for getting such packages. It is also the name
    of the command line utility that you will use to get the said packages.

    When writing our project code we divide it into multiple modules and even include some 3rd-party modules in it.
    Now the development step is complete. However, usually that's not the end of the application's lifecycle.

    Our project now needs to go through a build process, where one big final JavaScript bundle is built. That's the
    final file, which we will deploy to our web server for production. Production simply means that the application is
    being used by real world users.

    The build process is complex and it will almost always involve the following steps apart from others:

    Bundling - In this we combine all our modules together into one big file. This is a pretty complex process which
    can eliminate unused code and compress our code as well. This step is important for two big reasons. First,
    older browsers don't support modules at all so code that's in a module cannot be executed by any older browser.
    Second, it's better for performance to send less files to the browser to download and execute.

    Transpiling & Polyfilling - In the second step we do something called transpiling and polyfilling, which is
    basically converting all modern JavaScript syntax and features back to old ES5 syntax so that even older browsers
    can understand our code without breaking. This step is usually done using a tool called Babel.

    We don't perform these steps ourselves. Instead, we use a special tool to implement this build process for us.
    The most common build tools available, are probably webpack and parcel. They are called bundlers.

 */
