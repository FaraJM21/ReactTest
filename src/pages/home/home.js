/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataList, Spinner } from "../../components";
import { getData } from "../../redux/dataReducer";
import { BaseUrl } from "../../server/server";
import "./home.scss";
function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  useEffect(() => {
    axios
      .get(BaseUrl + `/character/${data.numbers}`)
      .then((res) => dispatch(getData(res.data)))
      .catch((err) => console.log(err));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container maxWidth="xl">
      <div className="home">
        {data.data.length === 0 ? <Spinner /> : <DataList />}
      </div>
    </Container>
  );
}

export default Home;
