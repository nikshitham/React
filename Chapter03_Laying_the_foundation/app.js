import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => React Element- JS object => Html elements (render)

const Title = () => (
<h1>Namaste React From the Title element🚀</h1>
);

//JSX
//JSX => React.createElement => React Element- JS object => Html elements (render)
// const jsxHeading = (<h1 id="jsxHeading">
//     Namaste React from JSX 🚀 </h1>);
// console.log(jsxHeading);

//React Component 

const HeadingComponent = () => (
    <>
    <div id="container">
        <Title/>
        <Title></Title>
        {Title()}
        <h1 className="heading">This is from React Functional Component 🚕- 1st container</h1>
    </div>
    <div id="container2">
    <Title/>
    <Title></Title>
    {Title()}
    <h1 className="heading">This is from React Functional Component 🚕- 2nd container</h1>
</div>
 </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
