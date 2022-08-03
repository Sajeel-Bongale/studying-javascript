/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649297#overview

    Whenever we try to access a web server, the browser, which is the client, sends a request to the server
    and the server will then send back a response which contains the data or the web page that was requested.

    This whole process is called the request-response model or also the client-server architecture.

    Let's use the example of the URL that we actually accessed in the last section to get our country data.
    (https://restcountries.com/v2/name/portugal)
    Every URL gets an HTTP or HTTPS, which is for the protocol that will be used on the connection. Then we have
    the domain name, which is restcountries.com in this case. Then after the slash we have the resource
    /v2/name/portugal

    This domain name, restcountries.com is actually not the real address of the server that we're trying to access.
    It's really just a nice name that is easy for us to memorize. But what this means is that we need a way of
    kind of converting the domain name to the real address of the server. And that happens through a so-called DNS.
    DNS stands for domain name server and domain name servers are a special kind of server.

    They are basically like the phone books of the Internet. The first step that happens when we access any web server
    is that the browser makes a request to a DNS and this special server will then simply match the web address
    of the URL to the server's real IP address. Essentially the DNS will convert the domain to the real IP address.

    The IP address also comes with the port that we access on the server. This port number is really just to identify
    a specific service that's running on a server. You can think of it like a sub address. This port number has nothing
    to do with the /v2/name/portugal resource that we want to access.

    Once we have the real IP address, a TCP socket connection is established between the browser and the server.
    They are now finally connected and this connection is typically kept alive for the entire time that it takes
    to transfer all files of the website or all data.

    TCP is the Transmission Control Protocol and IP is the Internet Protocol. Together they are communication protocols
    that define exactly how data travels across the web.

    Now it's time to finally make our request and the request that we make is an HTTP request, where HTTP stands
    for Hypertext Transfer Protocol.

    In a request message the beginning is the most important part called the start line. This contains the HTTP method
    that is used in the request, then the request target and the HTTP version.

    There are many HTTP methods available, but the most important ones are
    GET, for simply requesting data
    POST, for sending data
    and PUT and PATCH, to modify data.

    About the request target, this is where the server is told that we want to access the /v2/name/portugal resource.
    This is simply sent as the target in the HTTP request. The server can figure out what to do with it.
    If this target was empty, if it was just a slash, then we would be accessing the website's root.

    The next part of the request are the headers, which is some information that we send about the request itself.

    Finally, in the case, we're sending data to the server there will also be a request body and that body will contain
    the data that we're sending.

    There's also HTTPS protocol. The main difference between HTTP and HTTPS is that HTTPS is encrypted using TLS or SSL.

    Our request is formed and now it hits the server, which will then be working on it until it has our data or web
    page ready to send back. Once it's ready, it will send it back using  an HTTP response.

    The HTTP response message actually looks quite similar to the request with a start line, headers and a body.
    In this case, the start line has, besides the version, a status code and a message. These are used to let the
    client know whether the request has been successful or failed. The headers and body are similar to the request.

 */
