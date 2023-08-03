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
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://logo.com/image-cdn/images/kts928pd/production/7ab5def0ab1dad26a90bc35cb7eed9e628f7f201-430x430.png?w=1080&q=72"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home </li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}


const RestaurantCard =() => {
    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo"
             alt="rest-logo"
             src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg"/>
            <h3>Megna Foods</h3>
            <h4>Biryani Foods</h4>
            <h4>4.4 Star</h4>
            <h4>38 Min</h4>
        </div>
    )
}
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>


      <div className="res-container">
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      </div>
    </div>
  );
};

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

root.render(<Applayout />);
