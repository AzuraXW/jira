import React from "react";
import { User } from "./searchPanel";
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
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>名称</th>
            <th>负责人</th>
          </tr>
        </thead>
        <tbody>
          {list.map((project) => (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>
                {users.find((user) => user.id === project.personId)?.name ||
                  "未知用户"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
