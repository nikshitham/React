# Namaste React 🙏 Chapter01 - Assignment 
What is Emmet?

Ans:Emmet is a free add-on for text editor that allows you to type shortcuts that are then expanded into full pieces of code.
Emmet uses different abbreviations and short expressions depending on what's passed, and then dynamically converts the abbreviations into the full code. Emmet is mostly used for HTML, XML, and CSS, but it can also be used with programming languages.

Emmet is a tool that allows developers to write and expand shorthand syntax for HTML, XML, and other languages. It is designed to speed up the process of writing and editing code by providing a set of shortcuts and abbreviations that can be quickly expanded into full code blocks.
In Visual Studio Code (VS Code), Emmet is built-in and can be accessed by typing abbreviations and then pressing the Tab key to expand them. For example, typing "div.container" and pressing Tab will expand to:
Emmet also supports a wide range of other shorthand syntax, including tags, attributes, and nested elements. It can be a useful tool for quickly writing and editing code, and is widely used by developers working with HTML and other web development technologies.

Click here to know more - https://docs.emmet.io/abbreviations/syntax/


Difference between a Library and Framework?


Ans:A library is a collection of packages that perform specific operations whereas a framework contains the basic flow and architecture of an application. The major difference between them is the complexity. Libraries contain a number of methods that a developer can just call whenever they write code. React js is a library and Angular is Framework. The framework provides the flow of a software application and tells the developer what it needs and calls the code provided by the developer as required. If a library is used, the application calls the code from the library.
A library is a collection of pre-written code that can be used to perform common tasks or functions. Libraries are typically called or imported into a project and used as needed. They are useful for providing a set of useful tools or functions that can be easily incorporated into a project without having to write the code from scratch.
A framework, on the other hand, is a set of conventions and tools for building and organizing code. A framework provides a structure and set of guidelines for developing a specific type of application or solving a specific problem. It often includes a set of libraries and tools, but also imposes a certain structure or way of doing things on the developer.
One key difference between libraries and frameworks is that libraries are called by the code, while frameworks call the code. In other words, when you use a library, you are in control of how and when it is used. With a framework, the framework is in control and dictates how the code should be organized and used.
For example, if you were building a web application, you might use a library like jQuery to provide a set of tools for manipulating the DOM, but you would use a framework like Ruby on Rails to structure the overall application and provide tools for routing, database management, and other common tasks.

What is CDN? Why do we use it? 


Ans:Content Delivery Network (CDN) is a network of servers located in different geographical locations that are used to deliver content to users based on their geographic location. CDNs are used to improve the performance and availability of websites and applications by serving content from servers that are closer to the user, reducing the distance the data has to travel and minimizing latency.
CDNs are used for a variety of purposes, including:
a. Improving the speed of web pages: By serving content from a server that is physically closer to the user, CDNs can significantly improve the loading speed of web pages.
b. Reducing bandwidth costs: CDNs can reduce the amount of bandwidth required by a website or application by serving cached copies of content from servers located closer to the user.
c. Enhancing security: CDNs can provide additional security measures such as DDoS protection and SSL encryption, helping to protect websites and applications from attacks.
d. Improving availability: CDNs can help to improve the availability of a website or application by providing multiple copies of content that can be served to users if one server goes down.
e. CDNs are used by a wide range of websites and applications, including e-commerce sites, media and entertainment platforms, and software as a service (SaaS) providers
Why is React known as React? 
React is a JavaScript library for building user interfaces that was developed and open-sourced by Facebook in 2013. It is known as React because it was designed to help developers "react" to changes in the state of an application, by efficiently rendering and updating the UI in response to those changes.
React is designed to be declarative, meaning that developers specify what the UI should look like based on the current state of the application, and React takes care of updating the UI as needed. This allows developers to focus on building the logic of the application rather than worrying about how to update the UI efficiently.
React has gained popularity due to its performance and flexibility, and is widely used in the development of web and mobile applications. It is also used in combination with other technologies, such as the React Native framework for building native mobile apps, and the React VR library for building virtual reality experiences.

To know more: https://www.technigo.io/explained/what-is-react


Ans: Why you should use React
So what makes React so popular?
Well, React is declarative which means that you tell it WHAT you want (written in React language) and then it solves the HOW and builds the user interfaces in the web browser.
In order to simplify and not focus on the whole website at the same time, you break it down into smaller components that you can reuse wherever you want to.
Instead of having a complete website re-render every time something changes, React can update only the things that are different than they were before an event happened. This means that if you, for example, change your profile picture, the image is the only thing that is re-rendered – nothing else on the site is updated and replaced with data that is basically the same as it was before. Because that would be kind of unnecessary, right?


“And it’s called React because it reacts. It was developed by Facebook (a site that CONSTANTLY updates their data) to improve the user interface development and more effectively change (REACT to) what the user sees when they’re doing things like mouse clicking, submitting and typing.”


What is cross-origin in script tag? 
 
 Ans : The cross-origin attribute is used in the script tag to indicate that the script should be loaded from a different origin (domain, protocol, or port) than the current page. This is used to allow web pages to load resources from a different domain, while still allowing the browser to apply security measures such as the same-origin policy.
The cross-origin attribute can be set to either anonymous or use-credentials. If set to anonymous, the browser will include an Origin header with the request, but will not send any cookies or other credentials. If set to use-credentials, the browser will include credentials with the request.
The cross-origin attribute is often used to allow web pages to load resources such as fonts or scripts from a CDN (Content Delivery Network). It can also be used to allow web pages to access APIs or other resources from a different domain.
For example, the following script tag includes the cross-origin attribute to allow the script to be loaded from a different origin:
<script src="https://example.com/script.js" crossorigin="anonymous"></script>


What is difference between React and ReactDOM? 

Ans:React and ReactDOM are two separate libraries that are often used together in the development of web applications with React.
React is a JavaScript library for building user interfaces. It is designed to be declarative, meaning that developers specify what the UI should look like based on the current state of the application, and react takes care of updating the UI as needed. React is designed to be efficient and flexible, and is widely used in the development of web and mobile applications.
ReactDOM, on the other hand, is a library that provides an interface between React and the DOM (Document Object Model). The DOM is a tree-like structure that represents the HTML of a web page, and ReactDOM provides a set of functions that allow React components to be rendered to the DOM and updated efficiently.
In short, React is a library for building user interfaces, while ReactDOM is a library for interacting with the DOM and rendering React components to the web page. While they are often used together, they serve different purposes and can be used independently of each other.


What is difference between react.development.js and react.production.js files via CDN? 

 Ans:-react.development.js and react.production.js are two different versions of the React library that are available via CDN (Content Delivery Network). These files contain the same code, but are optimized for different environments and have different features enabled.
The react.development.js file is intended for use during development and includes additional features and debugging tools that can be helpful when building and testing React applications. These features may include additional warning messages, error checking, and other tools that can help identify problems or potential issues with the code.
The react.production.js file, on the other hand, is intended for use in production environments and has been optimized for performance and size. It does not include the additional debugging tools and may have other features disabled in order to reduce the size of the file and improve performance.
Which version of the React library you should use depends on your needs and the environment in which the code will be running. In general, the react.development.js file is recommended for use during development, while the react.production.js file is recommended for use in production environments.


What is async and defer? 

Ans: async and defer are attributes that can be used in the script tag to specify the loading behaviour of a script.
The async attribute tells the browser to download the script in the background while the page is still loading, and to execute the script as soon as it is available. This can improve the loading speed of the page, as the script does not block the rendering of the page while it is being downloaded. However, the script may not necessarily be executed in the order it appears in the HTML, as it may be executed as soon as it is available.
The defer attribute tells the browser to download the script in the background while the page is still loading, but to execute the script only after the page has finished loading. This can also improve the loading speed of the page, as the script does not block the rendering of the page. However, unlike async, defer ensures that the script is executed in the order it appears in the HTML.
Both async and defer are used to improve the performance and loading speed of web pages by allowing scripts to be loaded and executed in a non-blocking manner. However, they have different behaviours and may be more suitable for different use cases.




