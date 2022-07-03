import React, { useEffect, useState } from "react";
import List from "./list";
import SearchPanel from "./searchPanel";
import { cleanParams } from "../../utils";
import qs from "qs";

const apiUrl = process.env.REACT_APP_API_URL;
function Index() {
  const [params, setParams] = useState({
    name: "",
    personId: "",
  });

  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);

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
  }, [params]);

  useEffect(() => {
    fetch(`${apiUrl}/users`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((result) => {
        setUsers(result);
      });
  }, []);

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
