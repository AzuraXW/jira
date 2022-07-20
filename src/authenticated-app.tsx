import ProjectList from "./pages/project-list";
import styled from "@emotion/styled";
import { Row } from "./components/lib";
import { ReactComponent as Logo } from "./assets/img/software-logo.svg";
import { Dropdown, Menu } from "antd";
import { useAuth } from "./context/auth-content";

export default function AuthenticatedApp() {
  const { logout, user } = useAuth();
  return (
    <>
      <Header>
        <Row gap={2}>
          <Logo width="16rem" color="rgb(38, 132, 255)"></Logo>
          <span>项目</span>
          <span>项目</span>
        </Row>
        <HeaderRight>
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item>
                  <span onClick={() => logout()}>登出</span>
                </Menu.Item>
              </Menu>
            }
          >
            <span>Hi, {user?.name}</span>
          </Dropdown>
        </HeaderRight>
      </Header>
      <Main>
        <ProjectList></ProjectList>
      </Main>
    </>
  );
}

const Header = styled.header`
  padding: 26px;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
// const HeaderLeft = styled.div()``;
const HeaderRight = styled.div``;
const Main = styled.main``;
