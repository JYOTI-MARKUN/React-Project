import name from "./../assets/Images/person.png";
import email from "./../assets/Images/email.png";
import password from "./../assets/Images/password.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SignIn = () => {
  const [action, setAction] = useState("Sign In");
  const [formFields, setformFields] = useState({
    name:"",
    email:"",
    password:""
  });

  // chnaging input based on user Entry
const handleChange=(e)=>{
  console.log(e)
  // console.log(e.name)
  // console.log(e.value)
  const {name,value}=e.target
  setformFields((pre)=>({...pre,[name]:value}))
}  

// clear input fields
 const clearFileds=()=>{
  setformFields({
    name:"",
    email:"",
    password:""
  })
 }

 // usenavigate hook to go from one page to another in react
 const navigate = useNavigate()
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
            <input type="text" name="name" value={formFields.name} placeholder="Name" onChange={handleChange} />
          </div>:<div></div>}
       
          <div className="input email">
            <img src={email} alt="" />
            <input type="text" name="email" value={formFields.email} placeholder="Email" onChange={handleChange} />
          </div>
          <div className="input password">
            <img src={password} alt="" />
            <input type="password" name="password" value={formFields.password} placeholder="Password" onChange={handleChange} />
          </div>
        </div>
      {action==="Log In"?  <div className="forgot-password">
          ForgotPassword ?<span onClick={()=>{navigate("/newpassword")}} > Click Here</span>
        </div>:<div></div>}
        <div className="buttons">
          <button
            className={action === "Sign In" ? "signup btn" : "signup"}
            onClick={() => {
              setAction("Sign In");
              clearFileds()
            }}
          >
            Sign Up
          </button>
          <button
            className={action === "Log In" ? "login btn" : "login"}
            onClick={() => {
              setAction("Log In");
              clearFileds()
            }}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
