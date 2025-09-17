import React from "react";
import style from "./login.module.css";

function Login() {
  return (
    <div className={style.container}>
      <div className={style.loginContainer}>
        <div className={style.loginContent}>
          <h3>Login</h3>
          <input 
            className={style.inputField} 
            type="text" 
            // value={""} 
            placeholder="Input username"
            onChange={() => {}} 
          />
          <input 
            className={style.inputField} 
            type="password" 
            // value={""} 
            placeholder="Input Password"
            onChange={() => {}} 
          />
          <button className={style.loginBtn} onClick={() => {}}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
