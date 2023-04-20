import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";


const HeaderMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  font-size: 14px;
  padding: 20px 60px;
  background-color: gray;
`;

const LefttCol = styled.div`
  display: flex;

`

const RightCol = styled.div`
  display: flex;
  margin-right: 140px;

`
const BlogName = styled.span``

const BlogMenu = styled.ul``

const Notifi = styled.div`
`
const UserAvatar = styled.div``

function Header({loginCheck}) {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/write');
  }
  
  return (
    <>
      <HeaderMain>
        <LefttCol>
          <BlogName>블로그이름</BlogName>
          <BlogMenu>
            <Link to='/' style={{ textDecoration: "none" }}>홈페이지</Link>
            {loginCheck
              ? <Link to='/logout' style={{ textDecoration: "none" }}>로그아웃</Link>
              : <Link to='/login' style={{ textDecoration: "none" }}>로그인</Link>
            }
            <Link to='/join' style={{ textDecoration: "none" }}>회원가입</Link>
          </BlogMenu>
        </LefttCol>
        <RightCol>
          <button onClick={onClick}>글쓰기</button>
          <Notifi>알림</Notifi>
          <UserAvatar>아바타</UserAvatar>
        </RightCol>
      </HeaderMain>
    </>
  );
}

export default Header;