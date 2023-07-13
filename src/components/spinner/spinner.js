import React from "react";
import { Space, Spin } from "antd";
const Spinner = () => (
  <div
    style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      height: "60vh",
      alignItems: "center",
    }}
  >
    <Space size="middle">
      <Spin size="large" />
    </Space>
    />
  </div>
);
export default Spinner;
