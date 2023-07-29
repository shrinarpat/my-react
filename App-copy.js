import React from "react";
import ReactDOM from "react-dom/client";

// heading element using the plane react
const heading = React.createElement("h1", { id: "heading" }, "I'm heading");

// heading using JSX - HTML-Like or XML-Like syntax
// JSX -> Babel convert JSX to React.createElement -> When later converted to ReactElement(Object) -> Which is converted to HTMLElement during rendering by ReactDOM

//* React Element
const mainHeading = (
  <h1 id="heading" className="head" tabIndex="1">
    I'm JSX Heading
  </h1>
);

//* React Functional Component
const Title = () => <h1 id="heading">This is our main heading</h1>;

//* Component Composition
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h2 id="head">This is React Functional Component</h2>
  </div>
);

//* Component Composition
const HeadingComponent2 = () => (
  <div id="container">
    {mainHeading}
    <h2 id="head">This is React Functional Component</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2 />);
