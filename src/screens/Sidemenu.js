import { Link } from 'react-router-dom';
import styled from "styled-components";

const SideMain = styled.div`
  margin-top: 100px;
  background-color: aqua;
  width: 15%;

`

const Content = styled.ul`
    
`
const StyledLink = styled(Link)`
	box-sizing: border-box;
	display: block;
	padding: 4px 8px;
	margin: 0 auto;
	text-align: center;
`;

function Sidemenu() {
  return (
    <>
      <SideMain>
        <Content>
          <StyledLink to='/category/HTML' style={{ textDecoration: "none" }}>HTML</StyledLink>
          <StyledLink to='/category/CSS' style={{ textDecoration: "none" }}>CSS</StyledLink>
          <StyledLink to='/category/JavaScript' style={{ textDecoration: "none" }}>JavaScript</StyledLink>
          <StyledLink to='/category/React' style={{ textDecoration: "none" }}>React</StyledLink>
          <StyledLink to='/category/NodeJS' style={{ textDecoration: "none" }}>NodeJS</StyledLink>
        </Content>
      </SideMain>
    </>
  );
}

export default Sidemenu;
