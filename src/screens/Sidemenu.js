import styled from "styled-components";

const SideMain = styled.div`
  margin-top: 100px;
  background-color: aqua;
  width: 15%;

`

const Content = styled.ul`
`

function Sidemenu() {
  return (
    <>
      <SideMain>
        <Content>
          <h3>HTML</h3>
          <h3>CSS</h3>
          <h3>JavaScript</h3>
          <h3>React</h3>
          <h3>NodeJS</h3>
        </Content>
      </SideMain>
    </>
  );
}

export default Sidemenu;
