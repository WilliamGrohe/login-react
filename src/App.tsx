import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./components/Login";

import { Logedin } from "./pages/logedin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Login /> */}
      <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="logedin" element={ <Logedin/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
