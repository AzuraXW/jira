import { useAuth } from "context/auth-content";
import React from "react";
import { Button, Form, Input } from "antd";
function Login() {
  const { login } = useAuth();
  const handleSubmit = (values: { username: string; password: string }) => {
    login(values);
  };
  return (
    <div>
      <Form name="basic" onFinish={handleSubmit} autoComplete="off">
        <Form.Item
          name="username"
          rules={[{ required: true, message: "请输入你的用户名" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "请输入你的密码" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
