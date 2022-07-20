import { useAuth } from "context/auth-content";
import { Button, Form, Input } from "antd";
import React from "react";
function Register() {
  const { register } = useAuth();
  const handleSubmit = (values: { username: string; password: string }) => {
    register(values);
  };
  return (
    <div>
      <Form name="basic" onFinish={handleSubmit} autoComplete="off">
        <Form.Item
          name="username"
          rules={[{ required: true, message: "请输入你的用户名" }]}
        >
          <Input placeholder="用户名" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "请输入你的密码" }]}
        >
          <Input.Password placeholder="密码" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Register;
