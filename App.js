
// Nested HTML structure in ReactJS 
// const parent = React.createElement('div',
// {id: "parent"}, 
// React.createElement('div',{id: "Child"}, ), 
// React.createElement("h1",{},"I am h1 child" ))


// Header
//logo
// Nav items
import React from "react";
//import  ReactDOM from "react-dom/client";

// const parent = React.createElement('div',
//     { id: "parent" },
//     [React.createElement('div', { id: "Child1" }, [

//         React.createElement("h1", {}, "I am h1 child"),
//         React.createElement("h1", {}, "I am h2 child")]),
//     React.createElement('div', { id: "Child2" }, [

//         React.createElement("h1", {}, "I am h1 child"),
//         React.createElement("h1", {}, "I am h2 child")])])



//const heading = React.createElement("h1",{id: "heading,", xyz: "abc"}, "Hello World React Inside")
const root = ReactDOM.createRoot(document.getElementById("root"));


// // JSX
// const jstheading =<h1 id="heading"> JSx syntax </h1>


// const heading =(
//     <h1> React Element</h1>
// );
// const Heading = ()=> (
// <h1> Functional Component</h1>
// )
// //root.render(heading);
// console.log(parent);


const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://logo.com/image-cdn/images/kts928pd/production/7ab5def0ab1dad26a90bc35cb7eed9e628f7f201-430x430.png?w=1080&q=72"/>
            </div>
            <div className="nav-items">
               <ul>
                <li>Home </li>
                <li>About Us</li>
                <li>Contact us</li>
                <li>Cart</li>
               </ul>
            </div>
        </div>
    )
}


const Applayout = () => {
    return (
        <div className="app">
<Header/>
        </div>
    )
}









root.render(<Applayout/>);