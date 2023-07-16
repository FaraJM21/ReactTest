import React, { useState } from "react";
import { Col, Row, Skeleton } from "antd";
import { Card } from "antd";
import { Link } from "react-router-dom";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { BaseUrl } from "../../server/server";
import { getData, setNumbers } from "../../redux/dataReducer";

import Spinner from "../spinner/spinner";
function DataList() {
  const data = useSelector((state) => state.data);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [arr, setArr] = useState(
    Array.apply(null, Array(data.data.length)).map((y, i) => {
      return i;
    })
  );

  const fetchMoreData = async () => {
    setArr(
      Array.apply(null, Array(data.data.length + 10)).map((y, i) => {
        return i + 1;
      })
    );
    dispatch(setNumbers(arr));
    await axios
      .get(BaseUrl + `/character/${arr}`)
      .then((res) => dispatch(getData(res.data)))
      .catch((err) => console.log(err));
  };

  return (
    <div className="data_list">
      {data.errorMessage === "" ? (
        <InfiniteScroll
          dataLength={data.data.length}
          next={fetchMoreData}
          hasMore={data.hasMore === "true" ? true : false}
          loader={<Spinner />}
        >
          <Row gutter={[50, 34]}>
            {data.data.map((el) => {
              return (
                <Col
                  span={6}
                  key={el.id}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {!loading && (
                    <Card hoverable className="card">
                      <Skeleton.Image active />
                      <div className="card-inner">
                        <Skeleton active />
                      </div>

                      <div className="episodes">
                        <Skeleton active />
                      </div>
                    </Card>
                  )}
                  <Card hoverable className="card">
                    <img
                      src={el.image}
                      alt="404"
                      style={{
                        display: loading ? "flex" : "none",
                      }}
                      onLoad={() => setLoading(true)}
                    />
                    <div className="card-inner">
                      {!loading ? (
                        <Skeleton active />
                      ) : (
                        <>
                          <p>
                            Name:{" "}
                            <Link to={`/character/${el.id}`}> {el.name}</Link>{" "}
                          </p>
                          <p>Species: {el.species}</p>
                          <p>Status: {el.status}</p>
                        </>
                      )}
                    </div>
                    <div className="episodes">
                      {!loading ? (
                        <Skeleton active />
                      ) : (
                        <>
                          <p> Episodes: </p>
                          {el.episode.slice(0, 5).map((el, i) => {
                            return (
                              <Link to={`/episode/${el.slice(40, 42)}`} key={i}>
                                {el}
                              </Link>
                            );
                          })}
                        </>
                      )}
                    </div>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </InfiniteScroll>
      ) : (
        <h1>there is nothing here</h1>
      )}
    </div>
  );
}
export default DataList;
