import Header from "./components/pages/Header";
import Home from '../src/components/pages/Home';
import Login from '../src/components/AuthComponents/Login';
import Signup from '../src/components/AuthComponents/Signup';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Resturant from "./components/pages/Restuarent";

function App() {
  return (
  <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Header/>}></Route>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path="*" element={<h1>Page Not Found</h1>}></Route>
        </Routes>
      </BrowserRouter>
      <Resturant></Resturant>
  </>
  );
}

export default App;
