import React from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/App.scss";
import Character from "./pages/character";
import Episode from "./pages/episode";
import Home from "./pages/home";
import Layout from "./pages/layout";
function App() {
  return (
    <div className="app">
      <div className="container">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="character" element={<Character />} />
            <Route path="episode" element={<Episode />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
