import React from "react";
import "./Style.css";

const Login = () => {
  return (
    <>
      <head>
        <title>hello</title>
      </head>
      <div className="mainContainer">
        <h1 className="heading"> Login</h1>
        <div className="inputContainer">
          <h4 className="inputLabel">User Name</h4>
          <input className="input" type="text" />
        </div>
        <div className="inputContainer">
          <h4 className="inputLabel">Password</h4>
          <input className="input" type="password" maxLength={8} />
        </div>
        <div className="buttonContainer">
          <button
            className="button"
            type="submit"
            onClick={() => {
              console.log("hello :>> ");
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
