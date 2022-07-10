import React, { useState } from "react";
import Register from "./register";
import Login from "./login";

export default function UnauthenticatedApp() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div>
      {isRegister ? <Register /> : <Login />}
      <button onClick={() => setIsRegister(!isRegister)}>
        切换到: {isRegister ? "登录" : "注册"}
      </button>
    </div>
  );
}
