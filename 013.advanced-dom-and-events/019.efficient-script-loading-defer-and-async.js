/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649011#questions

    In this section we will take a look at different ways of loading a JS script file in HTML.

    There are three ways in which we can download and execute JS from HTML.
    1. Up to this point, we have always used the regular way of including JavaScript files into our HTML.
    <script src="script.js"></script>
    2. We can also add the async attribute to the script tag.
    <script async src="script.js"></script>
    3. Or the defer attribute.
    <script defer src="script.js"></script>
    These attributes are gonna influence the way in which the JS file is fetched.

    To differentiate between these three, we will compare the loading of scripts in two ways. In the head tag or
    at the end of the body tag.

    When we include a script without any attribute in the head, as the user loads the page and receives the HTML,
    the HTML code will start to be parsed by the browser and parsing the HTML is basically building the DOM tree
    from the HTML elements. Then at a certain point, it will find the script tag, start to fetch the script, and
    then execute it. Now, during all this time, the HTML parsing will pause. So it will be waiting for the script
    to get fetched and executed. Only after that, the rest of the HTML can be parsed. At the end of that parsing,
    the DOM content loaded event will finally get fired.

    This is not ideal at all. We don't want the browser to be just sitting there doing nothing, because this can
    have a huge impact on the page's performance. Plus, in this case, the script will actually be executed before
    the DOM is ready. Obviously, this is not ideal. Never do this.

    To avoid this we usually always put the script tag at the end of the body, so that all the HTML is already
    parsed, when it finally reaches the script tag. In this situation, the HTML is parsed, then the script tag
    is found at the end of the document, then the script is fetched. And then finally, the script gets executed.
    This approach is much better than the above one.

    When we use the async attribute in the head of the document the browser makes the fetch request as soon as the
    script tag is encountered, thereby reducing or making parallel the download time with the parsing of the HTML.
    However, once the script has successfully downloaded, it pauses the HTML parsing to execute the downloaded script.
    This means that the script is downloaded asynchronously, but then it's executed right away in a synchronous way.
    This approach makes the page loading times shorter than the regular approach.

    When deferring, what happens, is that the script is still downloaded asynchronously, but the execution of the
    script is deferred until the end of the HTML parsing. In practice, loading time is similar to the async attribute,
    but with the key difference is that with defer, the HTML parsing is never interrupted because the script is only
    executed at the end.

    Adding the async and defer attribute at the end of the body simply do not make any sense there because in the body,
    fetching and executing the script always happens after parsing the HTML anyway.

    NOTE: Refer to the two images corresponding to this section for a better visual model of all the timings.

    One important thing to remember about usage of async attribute is that the firing of the DOMContentLoaded event
    will not wait for the async scripts to download and execute. However, using defer, forces the DOM content loaded
    event to only get fired after the whole script has been downloaded and executed.

    Another very important aspect is that async scripts are not guaranteed to be executed in the exact order that they
    are declared in the code. On the other hand, by using defer, that is not the case. So using the defer attribute
    guarantees that the scripts are actually executed in the order that they are declared or written in the code.

    NOTE: Using defer in the HTML head is overall the best solution. PREFER USING DEFER.

    You should use defer for your own scripts and for scripts that are dependencies in your application. This will
    guarantee that the scripts will be executed in the order that they were written.

    For third party scripts, where the order does not matter, for example, an analytics software like Google Analytics,
    or an ad script, then in that case, you should use async.

 */
