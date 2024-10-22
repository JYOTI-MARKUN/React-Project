import name from "./../assets/Images/person.png";
import email from "./../assets/Images/email.png";
import password from "./../assets/Images/password.png";
import { useState } from "react";

const SignIn = () => {
  const [action, setAction] = useState("Sign In");
  return (
    <>
      <div className="container">
        <div className="header-content">
          
          <h1 className="heading">{action}</h1>
          <div className="underline"></div>
        </div>
        <div className="inputs">
        {action==="Sign In"?   <div className="input name">
            <img src={name} alt="" />
            <input type="text" placeholder="Name" />
          </div>:<div></div>}
       
          <div className="input email">
            <img src={email} alt="" />
            <input type="text" placeholder="Email" />
          </div>
          <div className="input password">
            <img src={password} alt="" />
            <input type="text" placeholder="Password" />
          </div>
        </div>
      {action==="Log In"?  <div className="forgot-password">
          ForgotPassword ?<span> Click Here</span>
        </div>:<div></div>}
        <div className="buttons">
          <div
            className={action === "Sign In" ? "signup btn" : "signup"}
            onClick={() => {
              setAction("Sign In");
            }}
          >
            Sign Up
          </div>
          <div
            className={action === "Log In" ? "login btn" : "login"}
            onClick={() => {
              setAction("Log In");
            }}
          >
            Login
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
