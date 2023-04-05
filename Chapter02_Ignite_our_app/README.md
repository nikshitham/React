# Namasthe react


# Parcel
- it creates a Dev build 
- it creates local server (it hosts our app in local server)
- HMR = Hot Module Replacement ( if you make any changes in any file/when you save somethig in the file parcel automatically updates & refreshes the page)
- File watching Algorithm - written in C++  
- Caching - Faster builds (Parcel cache- caching everything you do)
- Image optimization
- Minification 
- Bundling 
- Compress
- Consistent Hashing
- Code Splitting
- Differentioal Bundling - to support older browsers 
- Diagnostic
- Error Handling 
- HTTPs


Q1> What is ‘NPM’?

•	npm is a package manager for the JavaScript programming language maintained by npm, Inc.
•	npm is the package manager for Node.js. It was created in 2009 as an open source project to help JavaScript developers easily share packaged modules of code.
•	The npm Registry is a public collection of packages of open-source code for Node.js, front-end web apps, mobile apps, robots, routers, and countless other needs of the JavaScript community.
•	npm is the command line client that allows developers to install and publish those packages.
•	npm is the world's largest Software Registry/Library.
•	The registry contains over 800,000 code packages.
•	Open-source developers use npm to share software.
•	Standard repository for all the packages.
•	React app is powered by a lot of helper packages for bundling, optimizing, minifying which can be installed and tracked through npm.
•	It is a tool used for package management and the default package manager for Node projects. NPM is installed when NodeJS is installed on a machine. It comes with a command-line interface (CLI) used to interact with the online database of NPM. This database is called the NPM Registry, and it hosts public and private 'packages.' To add or update packages, we use the NPM CLI to interact with this database.
•	npm alternative is yarn
•	How to initialize npm?
      npm init
npm init -y can be used to skip the setup step, npm takes care of it and creates        the package.json json file automatically , but without configurations.



Q2: What is Parcel/Webpack? Why do we need it?

Parcel and Wepack are popular Web application bundlers. Bundler comes with many powerful features to simplify the development of complex web applications with multiple dependencies that is production-ready and easily loadable in the browser.


Webpack is a free and open-source module bundler for JavaScript.
Parcel is a web application bundler

A module bundler is a tool that takes pieces of JavaScript and their dependencies and bundles them into a single file, usually for use in the browser. 
Parcel and webpack` are the bundlers used mostly for JavaScript or Typescript code that helps you to minify, clean, and make your code compact so that    it becomes easier to send a request or receive the response from the server.

Parcel/Webpack is type of a web application bundler used for development and productions purposes or power our application with different type functionalities and features. It offers blazing fast performance utilizing multicore processing, and requires zero configuration. Parcel can take any type of file as an entry point, but an HTML or JavaScript file is a good place to start. Parcel/Webpack are type of bundlers that we use to power our application with different type functionalities and features.
Parcel Features:
•	HMR (Hot Module Replacement) - parcel keeps track of file changes via file watcher algorithm and renders the changes in the files
•	File watcher algorithm - made with C++
•	Minification
•	Cleaning our code
•	DEV and production Build
•	Super fast building algorithm
•	Image optimization
•	Caching while development
•	Compresses
•	Compatible with older version of browser
•	HTTPS in dev
•	Port Number
•	Consistent hashing algorithm
•	Zero Configuration
•	Automatic code splitting

installation commands:
•	Install:
npm install -D parcel
-D is used for development and as a development dependency.
•	Parcel Commands:
For development build:
•	npx parcel <entry_point>/ src file 
o	For production build:
npx parcel build <entry_point> 

Q3: What is .parcel-cache ?

.parcel-cache is used by parcel(bundler) to reduce the building time. It stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyse everything from scratch. It's a key reason why parcel can be so fast in development mode.
You might notice this while building the project. For the first time, it might take longer time and for subsequent builds the time gets reduced.

The .parcel-cache folder holds information about your project and is used by Parcel to rebuild your application. When you make changes to your files, Parcel will detect those changes and re-run your build with these files instead of starting from scratch.
https://www.digitalocean.com/community/tutorials/how-to-bundle-a-web-app-with-parcel-js

Q4: What is npx ?

npx is a npm package runner that is used to execute the command without installing the package (just use on the go). When you run a package using npx, it searches for the package in the local and global registry, and then it runs the package. If the package is not already installed, npx downloads the package files and installs the package, but it will only cache the files instead of saving it.
Examples :
npx parcel index.html -> npx searches for parcel package in your environment and if not found, downloads it and then runs the command. (with index.html as entry point. you can remove index.html and put it in the source of package.json as well)
npx create-react-app my-app -> npx seraches for create-react-app package in your environment, if not found, downlaods it and then creates my-app using create-react-app in the current project directory.

Q5>What is difference between dependencies vs devDependencies

`dependencies`: Packages required by your application in production.
`devDependencies`: Packages that are only needed for local development and testing.

dependencies	devDependencies
Packages that are required in the production environment	Packages that are required only in the development environment, and not in prod/testing environment
Command : npm install <package-name>	Command : npm install -D <package-name>or npm install --save-dev <package-name>
Eg : react, react-dom, redux, express, nodemon, babel, mocha (testing)	Eg: parcel

Q6. What is Tree Shaking?
Tree shaking is a concept in JavaScript to describe the removal of dead code. Tree shaking is done by module bundler like parcel/webpack while bundling multiple javascript files into single files thus improving the web performance.
Steps to implement tree shaking :
1.	Declare ES6 import and exports for the modules
2.	Bundler analyses the dependency tree during compilation phase.
3.	Any uncode code is removed from the final build.

Q7:What is Hot Module Replacement?
The process of adding, removing or updating the modules while the application is running without full reload is called Hot Module Replacement. This feature is available in all module bundlers like Parcel, Webpack,etc.,There are many advantages of this features :
1.	The application state is retained which is usually lost during full reload
2.	Insantly updates the browser when source css/js code is modified.
Parcel automatically does HMR while the application uses a framework (Eg:React, Vue). If no framework is used, then HMR can be opted using module.hot API
Webpack needs some configuration to be done for using HMR.

Q8: List down your favourite superpowers of Parcel and describe any 3 of them in your own words.
1.	minification (removing indentation)
2.	image optimizations
3.	compression(renaming variables)
4.	cleaning our code
5.	super fast build
6.	dev and prod builds
7.	caching while development
8.	works with older version of browsers
9.	Https on dev as well npx parcel index.html (--https)
10.	Consistent Hashing Algorithm
11.	Zero configuration
12.	Tree shaking - Removing unwanted code
13.	API proxy
My top favourites : 1.Tree shaking (described about it in q.no 6) 2.Caching - Parcel caches everything it builds. f you restart the dev server, Parcel will only rebuild files that have changed since the last time it ran. Parcel automatically tracks all of the files, configuration, plugins, and dev dependencies that are involved in your build 3.Image optimization - By default, Parcel includes lossless image optimization for JPEGs and PNGs in prod. mode, which reduces the size of images without affecting their quality. No configuration or query parameters are required to use.

Q9. What is .gitignore? What should we add and not add into it?
.gitignore file is a text file where we can mention the files/directories to ignore. That is, those files/directories will not be pushed into the git repositories. The great advantage of putiing them in .gitignore file is that those can be huge in size and those files can be generated with the help of package.json or package-lock.json file. It's very important to put node_modules in the .gitignore file since it contains a lot of packages which can be installed later by using package.json file. Other directories that should be placed in .gitignore file are .parcel-cache and dist. package.json and package-lock.json must not be put in .gitignore file.



Q10: What is the difference between package.json and package-lock.json

package.json: This file is created as soon as npm init command is fired	
package-lock.json: This file is automatically generated when npm modifies either node_modules tree or package.json

package.json: It contains metadata about the project like name, version, author, scripts and dependencies required by the project	
package-lock.json: It contains dependencies required by the project with the exact version with which it was created

package.json: It contains only direct dependencies	
package-lock.json: It contains nested/transitive dependencies (dependencies of dependencies)

package.json: This file must not be put in .gitignore file	
package-lock.json: This file must also not be put in .gitignore file

package.json: During deployment, there is no gurantee that if the version number of the dependencies with which the project was developed (package.json file has the least version of dependencies), will be reproduced and thus the project might not be working as intended	
package-lock.json: During deployment, the exact version of dependencies will be reproduced and thus the project will be working as intended


package.json: ^ or ~ can be used in version of dependencies in package.json	
package-lock.json: Only exact version of dependencies must be used in package-lock.json




Q11. Why should I not modify package-lock.json?

As the name suggests, it locks the package-lock.json file, since it contains sensitive data which are not indened to modify. As it contains the entire tree of dependencies, modifying any of the entries which might have a dependency to that entry might be affected. This causes inconsistency in the project.


Q12. What is node_modules ? Is it a good idea to push that on git?

In simple words, node_modules holds the source code of the packages that are installed through npm. It is a very bad practice to push node_modules to git (source control) since it is huge in size and blow up the project capacity and moreover all the packages in node_modules can be re-generated using package.json file.

Q13. What is the dist folder?

dist folder is created once the application is build using parcel web application bundler. IT contains the output of the bundler i.e all js files, css files and html files bundled into a single js file, css file and html file that is compressed and minified.

dist, holds the dynamically generated files that Parcel created for you. Notice that this folder includes your HTML, CSS, and JavaScript files, but are all named index with random characters in between. It also includes .map files. Parcel generates what is called a source map for you when you use the npx parcel command. The source map tells the browser how to locate the original source code from your bundled code. It is used to assist with debugging your code in development and in production:

To be clear, you do not perform any work within these files. In fact, if you delete these folders, both the .parcel-cache and dist folders will be automatically generated and updated when you run the npx parcel command again.

Note: Sometimes, when making significant edits to your code, you may notice that those changes aren’t reflected in the browser. If this happens, you can try refreshing the browser. If you’re still having a problem, stop your server from running by pressing CTRL+C in your terminal. Then, delete the .parcel-cache and dist folders. The .parcel-cache folder can potentially hold remnants of old code and by removing it, you can eliminate pain points. After deleting these, run the npx parcel src/index.html command again. This regenerates the '.parcel-cache and dist folders and files with your updated code.

Q14. What is browserlists. Read about dif bundlers: vite, webpack, parcel
The browserslist field in package.json can be used to specify which browsers/node.js versions the application supports. The value of this object can be an array of statistics ( % coverage), last versions, Node.js versions, Browser versions or even unreleased versions.
"browsersList" : ["last 2 versions", "> 1%", "not dead"]

Q15. Read about: ^ - caret and ~ - tilda
^ version	
In package.json, if a dependency's version [majorversion.minorversion.patchversion] is prefixed with ^ , then it will be updated to all future minor versions and not any major version	In package.json, 

~ version : if a dependency's version [majorversion.minorversion.patchversion] is prefixed with ~ , then it will be updated to all future patch versions and not minor/major versions

^ version : Eg: "react": "^18.2.0" will use releases from 18.2.0 to < 19.0.0	
~ version : Eg: "~18.2.0" will use releases from "18.2.0" < 18.3.0


Patch version is used for any bug fixes. Minor version is used for adding new functionality. Major version may contain major functionality changes/ some existing features may be deprecated. So if ~ is used , user will be updated to all bug fixed patch versions. If ^ is used, user will be updated to all new functionality/ features included minor version.



Q16. Read about Script types in html (MDN Docs)

type attribute of the <script> tag indicates the type of script.Until HTML 4, type is a required attribute. The value of type can be any of the following :
<script type="" src="app.js"></script>
In HTML5, type attribute is not mandatory. If type attribute is not present(default), or an empty string (type="") or javascript MIME type (text/javascript or application/ecmascript), it is treated as classic "javascript" file.
<script type="module" src="app.js"></script>
If the type attribute is set module, then the code in that js file is treated as module.
<script type="importmap" src="app.js"></script>
If the type attribute is set importmap, the body of teh element contains importmap ie an JSON object using which the browser can resolve the module specifiers while importing modules.
<script type="{$anyothervalue}" src="app.js"></script>
If the type attribute contains anyother value, then the code is treated as data block and will not be processed by the browser. A valid MIME type other than Javascript MIME type (Eg: image/png or text/css) must be mentioned. All the other attributes for this type will be ignored even the src attribute.



