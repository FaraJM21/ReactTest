import { Button, Form, Input, Select } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { getData, hasMore, setError } from "../../redux/dataReducer";
import { BaseUrl } from "../../server/server";
import "./style.scss";
const { Option } = Select;

const SearchForm = () => {
  const data = useSelector((state) => state.data);
  const [form] = Form.useForm();
  const [submittable, setSubmittable] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const dispatch = useDispatch();
  // Watch all values
  const values = Form.useWatch([], form);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setSubmittable(true);
      },
      () => {
        setSubmittable(false);
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  const onFinish = async (values) => {
    const { name, status } = values;

    try {
      await axios
        .get(BaseUrl + `/character/?name=${name}&status=${status}`)
        .then((res) => dispatch(getData(res.data.results)));
      dispatch(setError(""));
      dispatch(hasMore("false"));
    } catch (err) {
      dispatch(setError(err.response.data.error));
    }
    setShowReset(true);
    location.pathname !== "/" && navigate("/");
  };

  const resetAll = async () => {
    setShowReset(false);
    try {
      await axios
        .get(BaseUrl + `/character/${data.numbers}`)
        .then((res) => dispatch(getData(res.data)));
      dispatch(setError(""));
      dispatch(hasMore("true"));
    } catch (err) {
      dispatch(setError(err.response.data.error));
    }
    form.resetFields();
    location.pathname !== "/" && navigate("/");
  };

  return (
    <Form
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      className="search_form"
    >
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="Search with a name" />
      </Form.Item>
      <Form.Item
        name="status"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select placeholder="Select a status" allowClear>
          <Option value="alive">Alive</Option>
          <Option value="dead">Dead</Option>
          <Option value="unknown">Unknown</Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <div className="btns" style={{ display: "flex", gap: "20px" }}>
          <Button type="primary" htmlType="submit" disabled={!submittable}>
            Search
          </Button>
          <Button
            htmlType="button"
            onClick={resetAll}
            style={{ display: showReset ? "block" : "none" }}
          >
            Reset
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};
export default SearchForm;
