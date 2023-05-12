import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/home/Login';
import SignUp from './component/home/SignUp';
import ForgetPassword from './component/home/ForgetPassword';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/forgetpassword' element={<ForgetPassword/>} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}
export default App;
