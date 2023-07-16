import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";

function DropdownComponent({ episode }) {
  const items = [];

  for (let i = 0; i < episode.length; i++) {
    items.push({
      key: i,

      label: (
        <Link to={`/episode/${episode[i].slice(40, episode[i].length + 1)}`}>
          {episode[i].slice(40, episode[i].length + 1)}
        </Link>
      ),
    });
  }
  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={["click"]}
    >
      <Space>
        Episodes
        <DownOutlined />
      </Space>
    </Dropdown>
  );
}
export default DropdownComponent;
