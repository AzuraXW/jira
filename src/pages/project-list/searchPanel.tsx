import { Form, Input, Select } from "antd";
import React from "react";
export interface User {
  id: number;
  name: string;
  token: string;
}
interface SearchPanelProps {
  params: {
    name: string;
    personId: string;
  };
  setParams: (value: SearchPanelProps["params"]) => void;
  users: User[];
}
function SearchPanel({ params, setParams, users }: SearchPanelProps) {
  return (
    <div>
      <Form style={{ marginBottom: "26px" }} layout="inline">
        <Form.Item>
          <Input
            type="text"
            value={params.name}
            onChange={(event) =>
              setParams({
                ...params,
                name: event.target.value,
              })
            }
          />
        </Form.Item>
        <Form.Item>
          <Select
            defaultValue={""}
            onChange={(value) =>
              setParams({
                ...params,
                personId: value,
              })
            }
          >
            <Select.Option value="">全部</Select.Option>
            {users.map((user) => (
              <Select.Option value={user.id}>{user.name}</Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </div>
  );
}

export default SearchPanel;
