import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Recents from "./pages/Recents";
import Featured from "./pages/Featured";
import Profile from "./pages/Profile";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <Routes>
      <Route path="*" exact element={<Home />} />
      <Route path="/Recents" exact element={<Recents />} />
      <Route path="/Profile" exact element={<Profile />} />
      <Route path="/Favorites" exact element={<Favorites />} />
      <Route path="/Featured" exact element={<Featured />} />
      <Route path="/About" exact element={<About />} />
    </Routes>
  );
}

export default App;
