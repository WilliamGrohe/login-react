import React from "react";

import "./Login.scss";

function Login() {
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
        />
        <input
          type="password"
          name="Password"
          id="password"
          placeholder="Sua senha"
        />
        <button>ENTRAR</button>
      </div>
    </div>
  );
}

export default Login;
