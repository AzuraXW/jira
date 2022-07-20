import React, { useEffect, useState } from "react";
import List from "./list";
import SearchPanel from "./searchPanel";
import { cleanParams } from "../../utils";
import qs from "qs";
import { useMount, useDebounce } from "../../hooks";
import { useHttp } from "utils/http";
import styled from "@emotion/styled";

interface SearchParams {
  name: string;
  personId: string;
}

function Index() {
  const [params, setParams] = useState<SearchParams>({
    name: "",
    personId: "",
  });

  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const http = useHttp();

  const debounceParams = useDebounce<SearchParams>(params, 1000);
  useEffect(() => {
    http(`projects`, { data: cleanParams(debounceParams) }).then((result) => {
      setList(result);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceParams]);

  // 获取用户数据
  useMount(() => {
    http(`users`).then((result) => {
      setUsers(result);
    });
  });

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel
        params={params}
        setParams={setParams}
        users={users}
      ></SearchPanel>
      <List list={list} users={users}></List>
    </Container>
  );
}

const Container = styled.div`
  padding: 26px;
`;
export default Index;
