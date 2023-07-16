import React from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/App.scss";
const Layout = React.lazy(() => import("./pages/layout/layout"));
const Home = React.lazy(() => import("./pages/home/home"));
const Episode = React.lazy(() => import("./pages/episode/episode"));
const Character = React.lazy(() => import("./pages/character/character"));
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="character/:id" element={<Character />} />
          <Route path="episode/:episode" element={<Episode />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
