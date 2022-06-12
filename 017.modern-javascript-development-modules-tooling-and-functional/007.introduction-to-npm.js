/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649495#overview

     NPM stands for Node Package Manager and it's both a software on our computer and a package repository.

     Why do we need NPM?
     Back in the day before we had NPM, we used to include external libraries right into our HTML using the script tag.
     This would then expose a global variable.

     This approach had a few problems associated with it:
     First, it didn't make much sense having the HTML load all of JS files as that makes it messy.
     If third party dependencies changed, we had to ensure that the older version was replaced in the downloads
     as well as in the script imports with the newer versions.
     Lastly, before NPM, there was no single place where we could source all our dependencies from.

     In summary, all of these things used to be a huge pain and a huge mess.

     To start using NPM in a project we simply open the terminal in the desired folder location and use the
     npm init command. This will ask a few questions about how we want the project to be configured and then create
     a package.json file in our directory.

     To install a library in your project you use the npm install library-name command. npm i is the shortcut command
     for install. This will create a new field in your package.json called dependencies and in it you will find the
     library name with the installed version as a key value pair. The other thing that happens is that in your folder
     structure you will see that a node_modules folder is created inside which you will find the actual code of the
     library that you just installed.

     NOTE: Quite a few libraries uploaded to NPM still use the CommonJS pattern and that is why you cannot use or
     import them in a regular browser bound project. To use them we would need the help of a module bundler. If you
     are not using a module bundler, you will need to import the ES module compatible version of that library.
     For example, loadash is made in CommonJS while lodash-es is the ES module version of the library.

     When sharing your project or putting it up on version control like Git, you should never include the node
     modules folder because the node modules folder gets huge in large projects and is not feasible to be shared.

     Instead we have all the information we need in the package.json file. We can simply run an npm install on a new
     machine which does not have the node modules and npm will look into the package.json file and install all the
     dependencies which are required but not present in your project.

 */
