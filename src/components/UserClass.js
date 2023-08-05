import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "unknown",
      },
    };

    console.log("Child Constructor");
  }

  async componentDidMount() {
    console.log("Child ComponentDidMount");

    //* API
    const data = await fetch("https://api.github.com/users/shrinarpat");
    const json = await data.json();

    // console.log(json);

    this.setState({ userInfo: json });

    // this.interval = setInterval(() => {
    //   console.log("React Op");
    // }, 1000);
  }

  componentDidUpdate() {
    console.log("Child ComponentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Child ComponentWillUnmount");
    // clearInterval(this.interval);
  }

  render() {
    const { name, location, avatar_url, bio } = this.state.userInfo;
    return (
      <div className="sm:w-[50%] sm:m-auto my-4 shadow-lg p-4 rounded-md">
        <img src={avatar_url} alt="avatart" className="rounded-md" />
        <h2 className="font-bold text-lg my-2">Name: {name} </h2>
        <h3 className="font-bold text-md">Location: {location}</h3>
        <h4 className="font-bold">Contact: narpatsingh90918@gmail.com</h4>
        <p className="font-semibold"> Bio: {bio}</p>
      </div>
    );
  }
}

export default UserClass;
