import { useState } from 'react';
import styled from 'styled-components';

const LoginMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 50px;
  border: 0.8px solid gray;
  border-radius: 15px;
`

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();

    console.log('Email', email);
    console.log('Password', password);
  }
  return (
    <>
      <LoginMain>
        <LoginForm onSubmit={onSubmit}>
          <label>Email</label>
          <input type='email' value={email} onChange={onEmailChange} />
          <label>Password</label>
          <input type='password' value={password} onChange={onPasswordChange} />
          <br />
          <button formAction=''>Login</button>
        </LoginForm>
      </LoginMain>
    </>
  );
}

export default Login;
