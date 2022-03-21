import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthContextProvider } from "./contexts/AuthContext";

import { Login } from "./components/Login";

import { Logedin } from "./pages/logedin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="logedin" element={<Logedin />} />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
