import React from 'react'

import {useAuth} from "../hooks/useAuth"

export function Logedin() {

  const user = useAuth();

  return (
  <div className="foo">

    <h1>{user.user?.name}</h1>
  </div>
  )
}