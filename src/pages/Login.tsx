import React, { useState } from "react";

import "./Login.scss";

function Login() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  function handleLogin(e: string, p: string) {
    if (e === "" || p === "") {
      alert("Preencha os campos de Login e Senha!");
    }
    console.log(`Recebido email: ${e}, senha ${p}`);
  }

  return (
    <div className="main">
      <div className="card">
        <h2>LOGIN</h2>
        <input
          type="email"
          name="Email"
          id="email"
          alt="Insira seu e-mail"
          placeholder="Seu e-mail"
          value={emailValue}
          onChange={(v) => setEmailValue(v.target.value)}
        />
        <input
          type="password"
          name="Password"
          id="password"
          placeholder="Sua senha"
          value={passwordValue}
          onChange={(v) => setPasswordValue(v.target.value)}
        />
        <button onClick={() => handleLogin(emailValue, passwordValue)}>
          ENTRAR
        </button>
      </div>
    </div>
  );
}

export default Login;
