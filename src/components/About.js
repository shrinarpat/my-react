import { Component } from "react";
import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";

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
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h2 className="font-bold text-lg text-center py-4">
              {loggedInUser}
            </h2>
          )}
        </UserContext.Consumer>

        <UserClass name="First" />
      </div>
    );
  }
}

export default About;
