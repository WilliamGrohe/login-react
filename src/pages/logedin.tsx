import React from 'react'

import "../styles/logedin.scss"

import {useAuth} from "../hooks/useAuth"

export function Logedin() {

  const user = useAuth();

  return (
  <div className="main">
    <div className="card">
      <h2>HELLLOOO</h2>
    <h1>{user.user?.name}</h1>
    </div>

  </div>
  )
}