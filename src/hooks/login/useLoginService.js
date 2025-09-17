import { useState } from "react";

function useLoginService() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const handleLogin = () => {
    let loginInfo = {
      inputUsername: username,
      inputPassword: password,
    };

    console.log(loginInfo);
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
