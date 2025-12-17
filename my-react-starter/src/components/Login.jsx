import React from "react";
import "../components/Logine.css";
const Login = () => {
  return (
    <div>
      <div className="container">
        <form action="">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
          <br />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </form>
      </div>
    </div>
  );
};

export default Login;
