import "../App.css"
import React, { useState } from "react";
import email from "./../assets/Images/email.png";
import password from "./../assets/Images/password.png";
import { useNavigate } from "react-router-dom";

function Newpassword() {
// useState hook to manage formfields
  const [inputvalues,setInputvalues] = useState({
    email:"",
    newpassword:"",
    re_enternewpassword:""
  })

  // function to manage change in input field
  const handleChange =(e)=>{
    const {name,value} = e.target
    setInputvalues((prev)=>({...prev,[name]:value}))
  }

  // function to reset value
  const resetValues = ()=>{
    setInputvalues({
      email:"",
      newpassword:"",
      re_enternewpassword:""
    })
  }

  
 // usenavigate hook to go from one page to another in react
 const navigate = useNavigate()

  return (
    <div className="container">
      <div className="header-content">
        <h1 className="heading"><u>Reset Password</u></h1>
       
      </div>
      <div className="inputs">
        <div className="input email">
          <img src={email} alt="" />
          <input type="text" name="email" value={inputvalues.email} placeholder="email"
          onChange={handleChange} />
        </div>
        <div className="input password">
          <img src={password} alt="" />
          <input
            type="password"
            name="newpassword"
            value={inputvalues.newpassword}
            placeholder="new password"
            onChange={handleChange}
          />
        </div>
        <div className="input password">
          <img src={password} alt="" />
          <input
            type="password"
            name="re_enternewpassword"
            value={inputvalues.re_enternewpassword}
            placeholder="re-enter new password"
            onChange={handleChange}
          />
        </div>
        <div className="buttons">
          <button className="submit" onClick={resetValues}>Submit</button>
          <button className="reset" onClick={()=>navigate("/home")}>Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default Newpassword;
