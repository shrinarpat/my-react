import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <a href="/">
          {" "}
          <img src={LOGO_URL} alt="company logo" />
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
          <li className="">
            <button
              className="login-btn"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
