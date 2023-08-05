import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="flex flex-col sm:flex-row justify-between sm:items-center  bg-orange-200">
      <div className="logo-container">
        <Link to="/">
          {" "}
          <img src={LOGO_URL} alt="company logo" className="w-24 h-16" />
        </Link>
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
            <Link to="/" className="p-4">
              Cart
            </Link>
          </li>
          <li className="m-2">
            <Link to="/login" className="p-4">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
