import React, { useState } from "react";
import { Col, Row, Skeleton } from "antd";
import { Card } from "antd";
import { Link } from "react-router-dom";
import "./style.scss";
function DataList({ data }) {
  return (
    <Row gutter={[200, 34]}>
      {data.map((el) => {
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
            <Card hoverable className="card">
              <img
                src={el.image}
                alt="404"
                style={{ width: "100%" }}
                // onLoad={() => setLoading(true)}
              />
              <div className="card-inner">
                <p>
                  Name: <Link to={`/character/${el.id}`}> {el.name}</Link>{" "}
                </p>
                <p>Species: {el.species}</p>
                <p>Status: {el.status}</p>
              </div>
              <div className="episodes">
                <p> Episodes: </p>
                {el.episode.slice(0, 5).map((el, i) => {
                  return (
                    //
                    <Link to={`/episode/${el.slice(40, 42)}`} key={i}>
                      {el}
                    </Link>
                    // <p onClick={() => click(el)}>{el}</p>
                  );
                })}
              </div>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}
export default DataList;
