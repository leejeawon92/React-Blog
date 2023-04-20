import styled from 'styled-components';
import Header from './Header';

const WriteForm = styled.div`
  width: 80%;
  margin: 100px;
  align-items: center;
  justify-content: center;

  input {
    margin-bottom: 10px;
    width: 500px;
    height: 40px;
  }
  textarea {
    width: 80%;
    min-height: 500px;
  }
`

const WriteBtn = styled.button`
  width: 200px;
  height: 50px;
  font-size: 20px;
  padding: 20px;
  border: none;
  border-radius: 5px;
  margin-top: 40px;
`

function Write() {

  return (
    <>
      <Header/>
      <WriteForm>
        <input type='text' placeholder='제목을 입력하세요'></input>
        <textarea placeholder='내용을 입력하세요'></textarea>
        <WriteBtn>입력</WriteBtn>
      </WriteForm>
    </>
  );
}

export default Write;