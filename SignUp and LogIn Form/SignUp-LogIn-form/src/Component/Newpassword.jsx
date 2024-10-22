import React from "react";

function Newpassword() {
  return (
    <div className="container">
      <div className="header-content">
        <h1>Reset Password</h1>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input email">
          <img src="" alt="" />
          <input type="text" name="" value="" placeholder="email" />
        </div>
        <div className="input password">
          <img src="" alt="" />
          <input
            type="password"
            name="new password"
            value=""
            placeholder="new password"
          />
        </div>
        <div className="input password">
          <img src="" alt="" />
          <input
            type="password"
            name="re-enter new password"
            value=""
            placeholder="re-enter new password"
          />
        </div>
        <div className="buttons">
          <button className="submit">Submit</button>
          <button className="reset">Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Newpassword;
