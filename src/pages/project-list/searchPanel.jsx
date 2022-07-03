import React from "react";

function SearchPanel({ params, setParams, users }) {
  return (
    <div>
      <form action="">
        <input
          type="text"
          value={params.name}
          onChange={(event) =>
            setParams({
              ...params,
              name: event.target.value,
            })
          }
        />
        <select
          name="person"
          onChange={(event) =>
            setParams({
              ...params,
              personId: event.target.value,
            })
          }
        >
          <option value="">请选择</option>
          {users.map((user) => (
            <option value={user.id}>{user.name}</option>
          ))}
        </select>
      </form>
    </div>
  );
}

export default SearchPanel;
