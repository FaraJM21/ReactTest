import React, { useEffect, useState } from "react";
import { Col, Row, Skeleton, Card } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { BaseUrl } from "../../server/server";
import { getData, setError, setNumbers } from "../../redux/dataReducer";
import Fade from "react-reveal/Fade";
import Spinner from "../spinner/spinner";
import DropdownComponent from "../dropdown/dropDownComponent";

function InfiniteScroller({ data }) {
  const [loading, setLoading] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [num, setNum] = useState(6);
  const [wrap, setWrap] = useState(20);
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
      .catch((err) => dispatch(setError(err.response.data.error)));
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    if (width <= 1380 && width > 1115) {
      setNum(8);
    } else if (width <= 1115 && width > 760) {
      setNum(10);
      setWrap(150);
    } else if (width <= 760) {
      setNum(24);
    } else {
      setNum(6);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);
  return (
    <InfiniteScroll
      dataLength={data.data.length}
      next={fetchMoreData}
      hasMore={data.hasMore === "true" ? true : false}
      loader={<Spinner />}
      style={{ margin: "10px 0" }}
    >
      <Row gutter={[wrap, 34]} className="infinite-row">
        {data.data.map((el) => {
          return (
            <Col
              span={num}
              key={el.id}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Fade bottom>
                <Card className="card">
                  {!loading && <Skeleton.Image active />}
                  <img
                    src={el.image}
                    alt="404"
                    style={{
                      display: loading ? "flex" : "none",
                    }}
                    onLoad={() => setLoading(true)}
                  />

                  <div className="card_wrapper">
                    {!loading ? (
                      <Skeleton active />
                    ) : (
                      <>
                        <div className="card-inner">
                          <p>
                            Name:{" "}
                            <Link to={`/character/${el.id}`}> {el.name}</Link>{" "}
                          </p>
                          <p>Species: {el.species}</p>
                          <p>Status: {el.status}</p>
                        </div>

                        <DropdownComponent episode={el.episode.slice(0, 5)} />
                      </>
                    )}
                  </div>
                </Card>
              </Fade>
            </Col>
          );
        })}
      </Row>
    </InfiniteScroll>
  );
}

export default InfiniteScroller;
