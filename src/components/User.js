import { useState, useEffect } from "react";
const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);

  useEffect(() => {
    // const interval = setInterval(() => {
    //   console.log("React Op");
    // }, 1000);

    return () => {
      // clearInterval(interval);
    };
  }, []);
  return (
    <div className="user-card">
      <h2>Name: {name} </h2>
      <h3>Location: Bhilwara</h3>
      <h4>Contact: narpatsingh90918@gmail.com</h4>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </div>
  );
};

export default User;
