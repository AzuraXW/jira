import React from "react";
import { User } from "./searchPanel";
import { Table } from "antd";
import dayjs from "dayjs";
interface ListProps {
  list: {
    id: number;
    name: string;
    personId: number;
    organization: string;
    created: number;
  }[];
  users: User[];
}
function List({ list, users }: ListProps) {
  const columns = [
    {
      title: "名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "部门",
      dataIndex: "organization",
      key: "organization",
    },
    {
      title: "负责人",
      dataIndex: "age",
      key: "age",
      render(text: string, project: any) {
        return (
          users.find((user) => user.id === project.personId)?.name || "未知用户"
        );
      },
    },
    {
      title: "创建时间",
      render(text: string, project: any) {
        return dayjs(project.created).format("YYYY-MM-DD");
      },
    },
  ];
  return (
    <div>
      <Table dataSource={list} columns={columns} />;
    </div>
  );
}

export default List;
