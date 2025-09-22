import { useState } from "react";
import { postLogin } from "../../service/auth";
import { useNavigate } from "react-router-dom";

function useLoginService() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async() => {
    let loginInfo = {
      username: username,
      password: password,
    };
    try {
      const response = await postLogin(loginInfo);
      if(response.id){
        localStorage.setItem("userData", response);
        localStorage.setItem("token", response.accessToken)
        navigate('/')
      } else {
        console.log("terjadi masalah pada saat auth")
      }
    } catch (error) {
      console.log("error login : ", error)
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    handleLogin,
  };
}

export default useLoginService
