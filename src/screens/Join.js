import { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';

const JoinMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

const JoinForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 50px;
  border: 0.8px solid gray;
  border-radius: 15px;
`

function Join() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [name, setName] = useState('');
  const loginCheck = false;

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  }
  const onNameChange = (event) => {
    setName(event.target.value);
  }

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  }
  const onPassword2Change = (event) => {
    setPassword2(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <>
      <Header loginCheck={loginCheck}/>
      <JoinMain>
        <JoinForm onSubmit={onSubmit}>
          <label>이메일</label>
          <input type='email' value={email} onChange={onEmailChange} />
          <label>이름</label>
          <input type='text' value={name} onChange={onNameChange} />
          <label>패스워드</label>
          <input type='password' value={password} onChange={onPasswordChange} />
          <label>패스워드 재입력</label>
          <input type='password' value={password2} onChange={onPassword2Change} />
          <br />
          <button>회원가입</button>
        </JoinForm>
      </JoinMain>
    </>
  );
}

export default Join;
