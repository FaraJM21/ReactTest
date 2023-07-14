import { Button, Form, Input, Select } from "antd";
import React, { useEffect } from "react";
import "./style.scss";
const { Option } = Select;

const SearchForm = () => {
  const [form] = Form.useForm();
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
  const values = Form.useWatch([], form);

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

  const onFinish = (values) => {
    console.log(values);
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
        name="gender"
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
        <Button type="primary" htmlType="submit" disabled={!submittable}>
          Search
        </Button>
      </Form.Item>
    </Form>
  );
};
export default SearchForm;
