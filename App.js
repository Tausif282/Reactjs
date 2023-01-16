/*
* Create a server
* HMR--Hot Module Replacement
* File watchers algorithm --c++
* BUNDLING
* MINIFY
* Cleaning our Code
* dev and Production Build
* Super fast build algorithm
* Image optimization
* Caching while development
* compression
* Compatable with older version of browser
* HTTPS on dev
* Manges Number
* consistant Hashing Algorithm
* Zero config
* Tree Shaking---Removing un-wanted code
*
*
*

*/

// Transitive Dependencies

import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement=>object=>HTML(DOM)
//jsx=>React.createElement=>object=>HTML(DOM)
const Title = () => {
  return <h1>Hello React </h1>;
};

const Heading = () => {
  return (
    <div>
      <Title />
      {console.log(20)}
      <h1>Hellow React functional component</h1>
      <h2>This is h2 Tag</h2>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
