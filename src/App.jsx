import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Recents from "./pages/Recents";


function App() {
  

  return (
    <Routes>
      <Route
        path="*"
        exact
        element={<Home/> }
      />
      <Route
        path="/Recents"
        exact
        element={<Recents/>}
      />
      <Route path="/About" exact element={<About />} />
    </Routes>
  );
}

export default App;
