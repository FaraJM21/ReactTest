/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataList, Spinner } from "../../components";
import { getData, setError } from "../../redux/dataReducer";
import { BaseUrl } from "../../server/server";
import "./home.scss";
function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  const fetchData = async () => {
    try {
      await axios
        .get(BaseUrl + `/character/${data.numbers}`)
        .then((res) => dispatch(getData(res.data)));
    } catch (err) {
      dispatch(setError(err.message));
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container maxWidth="xl">
      <div className="home">
        {data.data.length === 0 && data.errorMessage === "" ? (
          <Spinner />
        ) : (
          <DataList />
        )}
      </div>
    </Container>
  );
}

export default Home;
