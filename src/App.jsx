import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";


function App() {
  

  return (
    <Routes>
      <Route
        path="/Home"
        exact
        element={<Home/> }
      />
      {/* <Route
        path="/Movie"
        exact
        element={}
      /> */}
      <Route path="/About" exact element={<About />} />
    </Routes>
  );
}

export default App;
