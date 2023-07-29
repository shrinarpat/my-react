import React from "react";
import ReactDOM from "react-dom/client";

import restaurantList from "./restaurants";

/* 
! Food Ordering App Basic Design
* 1) Heading Component
*     - Logo
*     - Navigation
* 2) Body
*     - Search functionality
*     - RestaurantContainer
*         - RestaurantCards
* 3) Footer
*     - Copyright 
*     - Link
*     - Address
*     - Contact
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <a href="/">
          {" "}
          <img
            src="https://img.freepik.com/free-vector/flat-design-antojitos-logo-design-template_23-2149599172.jpg?size=626&ext=jpg&uid=R23689420&ga=GA1.2.1802166082.1690615870&semt=ais"
            alt="company logo"
          />
        </a>
      </div>
      <div className="navigation">
        <ul className="nav">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/">About Us</a>
          </li>
          <li className="nav-item">
            <a href="/">Contact Us</a>
          </li>
          <li className="nav-item">
            <a href="/">Cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { img, name, resType, starRating, deliveryTime, foodCost } =
    props?.restaurant;
  return (
    <div className="card">
      <img src={img} alt="card-img" />
      <h4>{name}</h4>
      <p>{resType}</p>
      <ul className="res-meta-data-container">
        <li>{starRating} stars</li>
        <li>{deliveryTime} Mins</li>
        <li>{foodCost} Rs</li>
      </ul>
    </div>
  );
};

const MainBody = () => {
  return (
    <div className="body">
      <div className="search-container">
        <form className="search-form">
          <input
            type="text"
            name="search"
            placeholder="Restaurant..."
            id="search-term"
            className="search-input"
            required
          />
          <button type="submit" id="search-button" className="search-btn">
            Search
          </button>
        </form>
      </div>
      <div className="restaurant-cards-container">
        {restaurantList.map((res) => (
          <RestaurantCard key={res.id} restaurant={res} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <MainBody />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
