import React from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/App.scss";
import Character from "./pages/character/character";
import Episode from "./pages/episode/episode";
import Home from "./pages/home/home";
import Layout from "./pages/layout/layout";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="character" element={<Character />} />
          <Route path="episode" element={<Episode />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
