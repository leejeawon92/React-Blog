import Header from './Header';
import Sidemenu from './Sidemenu';

function Home() {
  const loginCheck = false;
  return (
    <>
      <Header loginCheck={loginCheck}/>
      <Sidemenu/>
    </>
  );
}

export default Home;
