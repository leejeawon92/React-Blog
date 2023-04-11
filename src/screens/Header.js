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

const BlogMenu = styled.div``

const Notifi = styled.div`
`
const UserAvatar = styled.div``

function Header() {
  return (
    <>
      <HeaderMain>
        <LefttCol>
          <BlogName>블로그이름</BlogName>
          <BlogMenu>
            <span>메뉴1</span>
            <span>메뉴2</span>
            <span>메뉴3</span>
          </BlogMenu>
        </LefttCol>
        <RightCol>
          <button>글쓰기</button>
          <Notifi>알림</Notifi>
          <UserAvatar>아바타</UserAvatar>
        </RightCol>
      </HeaderMain>
    </>
  );
}

export default Header;