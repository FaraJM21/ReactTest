/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { DataList, Spinner } from "../../components";
import "./home.scss";
function Home() {
  const data = useSelector((state) => state.data.data);

  return (
    <Container maxWidth="lg">
      <div className="home">
        {data.length === 0 ? <Spinner /> : <DataList data={data} />}
      </div>
    </Container>
  );
}

export default Home;
