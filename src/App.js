import { Route, Routes } from 'react-router-dom';
import Header from './screens/Header';
import Home from './screens/Home';
import Login from './screens/Login';
import Join from './screens/Join';
import Write from './screens/Write';

function App() {
  return (
    <>
      <Routes>
        <Route path='/'  element={<Home/>} >홈페이지</Route>
        <Route path='/login'  element={<Login />} >로그인</Route>
        <Route path='/join'  element={<Join />} >회원가입</Route>
        <Route path='/join'  element={<Join />} >회원가입</Route>
        <Route path='/write'  element={<Write />} ></Route>
        
      </Routes>
    </>
  );
}

export default App;
