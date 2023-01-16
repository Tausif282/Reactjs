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

const heading = React.createElement("h1", { id: "title" }, "Heading");

// React.createElement=>object=>HTML(DOM)
//jsx=>React.createElement=>object=>HTML(DOM)
const heading2 = React.createElement("h1", { id: "title" }, "Heading2");

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
