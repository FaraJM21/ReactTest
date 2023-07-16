import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./assets/App.scss";
const Layout = React.lazy(() => import("./pages/layout/layout"));
const Home = React.lazy(() => import("./pages/home/home"));
const Episode = React.lazy(() => import("./pages/episode/episode"));
const Character = React.lazy(() => import("./pages/character/character"));
function App() {
  const theme = useSelector((state) => state.data.theme);
  return (
    <div className="app" id={`${theme === "dark" ? "darkTheme" : ""}`}>
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
