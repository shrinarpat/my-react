import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UserContext from "../utils/UserContext";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);

  // subscribing to store using useSelector hook
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex flex-col sm:flex-row justify-between sm:items-center  bg-orange-200 rounded-lg pr-4">
      <div className="logo-container flex items-center">
        <Link to="/">
          {" "}
          <img src={LOGO_URL} alt="company logo" className="w-24 h-16" />
        </Link>
        <span className="font-semibold text-md p-2 m-2"> {loggedInUser}</span>
      </div>
      <div className="navigation mr-8">
        <ul className="nav flex flex-col sm:flex-row ">
          <li className="nav-item m-2">
            <Link to="/" className="p-1">
              Home
            </Link>
          </li>
          <li className="nav-item m-2">
            <Link to="/about" className="p-4">
              About Us
            </Link>
          </li>
          <li className="nav-item m-2">
            <Link to="/contact" className="p-4">
              Contact Us
            </Link>
          </li>
          <li className="nav-item m-2">
            <Link to="/grocery" className="p-4">
              Grocery
            </Link>
          </li>
          <li className="nav-item m-2">
            <Link to="/cart" className="p-4">
              Cart({cartItems.length})
            </Link>
          </li>
          <li className="m-2">
            <Link to="/login" className="p-4 font-bold">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
