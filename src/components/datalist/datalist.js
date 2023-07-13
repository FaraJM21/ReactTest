import React, { useState } from "react";
import { Col, Row, Skeleton } from "antd";
import { Card } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./style.scss"; 
function DataList({ data }) {
  const [loading, setLoading] = useState(true);
  
  return (
    <Row gutter={[120, 34]}>
      {data.map((el) => {
        return (
          <Col span={6} key={el.id}>
            <Card hoverable className="card">
              <img
                src={el.image}
                alt="404"
                style={{ width: "100%" }}
                onLoad={() => setLoading(true)}
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
                    <div className="episode" key={i}>
                      <Link to={`/episode/${el.slice(40, 42)}`}>{el}</Link>
                    </div>
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
