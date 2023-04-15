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
  return (
    <>
      <LoginMain>
        <LoginForm >
          <label>Email</label>
          <input type='email' />
          <label>Password</label>
          <input type='password' />
          <br />
          <button formAction=''>Login</button>
        </LoginForm>
      </LoginMain>
    </>
  );
}

export default Login;
