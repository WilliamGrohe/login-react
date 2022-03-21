import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {useAuth} from "../hooks/useAuth"

import "../styles/login.scss";

export function Login() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  
  let navigate = useNavigate();

  const { user, newUser } = useAuth();


  function handleLogin(e: string, p: string) {
    if (e === "" || p === "") {
      alert("Preencha os campos de Login e Senha!");
    } 
    if ( e !== '' && p === '1') {
      newUser(e);
      navigate('/logedin');
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

