import React, { useEffect, useState } from "react";
import List from "./list";
import SearchPanel from "./searchPanel";
import { cleanParams } from "../../utils";
import qs from "qs";
import { useMount, useDebounce } from "../../hooks";

const apiUrl = process.env.REACT_APP_API_URL;
function Index() {
  const [params, setParams] = useState({
    name: "",
    personId: "",
  });

  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);

  const debounceParams = useDebounce(params, 1000);
  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanParams(params))}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((result) => {
        setList(result);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceParams]);

  // 获取用户数据
  useMount(() => {
    fetch(`${apiUrl}/users`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((result) => {
        setUsers(result);
      });
  });

  return (
    <div>
      <SearchPanel
        params={params}
        setParams={setParams}
        users={users}
      ></SearchPanel>
      <List list={list} users={users}></List>
    </div>
  );
}

export default Index;
