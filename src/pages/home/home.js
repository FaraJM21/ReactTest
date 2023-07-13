/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { DataList, Spinner } from "../../components";
import { BaseUrl } from "../../server/server";
import "./home.scss";
function Home() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await axios
      .get(BaseUrl + "/character")
      .then((res) => setData(res.data.results))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container maxWidth="lg">
      <div className="home">
        {data.length === 0 ? <Spinner /> : <DataList data={data} />}
      </div>
    </Container>
  );
}

export default Home;
