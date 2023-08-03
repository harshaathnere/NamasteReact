
// Nested HTML structure in ReactJS 
// const parent = React.createElement('div',
// {id: "parent"}, 
// React.createElement('div',{id: "Child"}, ), 
// React.createElement("h1",{},"I am h1 child" ))
import React from "react";
//import  ReactDOM from "react-dom/client";

const parent = React.createElement('div',
    { id: "parent" },
    [React.createElement('div', { id: "Child1" }, [

        React.createElement("h1", {}, "I am h1 child"),
        React.createElement("h1", {}, "I am h2 child")]),
    React.createElement('div', { id: "Child2" }, [

        React.createElement("h1", {}, "I am h1 child"),
        React.createElement("h1", {}, "I am h2 child")])])



//const heading = React.createElement("h1",{id: "heading,", xyz: "abc"}, "Hello World React Inside")
const root = ReactDOM.createRoot(document.getElementById("root"));


// JSX
const jstheading =<h1 id="heading"> JSx syntax </h1>
//root.render(heading);
console.log(parent);
root.render(parent);