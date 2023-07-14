import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./assets/App.scss";
import { getData } from "./redux/dataReducer";
import { BaseUrl } from "./server/server";
const Layout = React.lazy(() => import("./pages/layout/layout"));
const Home = React.lazy(() => import("./pages/home/home"));
const Episode = React.lazy(() => import("./pages/episode/episode"));
const Character = React.lazy(() => import("./pages/character/character"));
function App() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const fetchData = async () => {
    await axios
      .get(BaseUrl + "/character")
      .then((res) => setData(res.data.results))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  dispatch(getData(data));

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
