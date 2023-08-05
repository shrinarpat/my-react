import User from "./User";
import UserClass from "./UserClass";

import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent ComponentDidMount");
  }
  render() {
    // console.log("Parent Render");
    return (
      <div className="about-container">
        <UserClass name="First" />
      </div>
    );
  }
}

export default About;
