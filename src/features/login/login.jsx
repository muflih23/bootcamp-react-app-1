import { useState } from "react";
import RegulerButton from "../../components/atom/button/reguler-button";
import InputText from "../../components/atom/input/input-text";
import style from "./login.module.css";
import InputPassword from "../../components/atom/input/input-password";
import useLoginService from "../../hooks/login/useLoginService";

function Login() {
  const { username, setUsername, password, setPassword, handleLogin } =
    useLoginService();

  return (
    <div className={style.container}>
      <div className={style.loginContainer}>
        <div className={style.loginContent}>
          <h3>Login</h3>
          <InputText
            placeholder={"Input Username"}
            onChange={(text) => setUsername(text.target.value)}
            value={username}
          />
          <InputPassword
            placeholder={"Input Password"}
            onChange={(value) => setPassword(value.target.value)}
            value={password}
          />
          {/* <button className={style.loginBtn} onClick={() => {}}>Login</button> */}
          <div className={style.loginBtnWrapper}>
            <RegulerButton text={`Login`} onClick={() => handleLogin()} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
