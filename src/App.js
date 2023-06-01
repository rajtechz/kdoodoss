import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import ForgetPassword from './component/ForgetPassword';
import Attendence from './component/Attendence';
import Demo from './component/Demo';
import AttendanceList from './component/AttendanceList';
import Setting from './component/Setting';
import Total from './component/Total';
import NavBar from './component/NavBar';
import Awardees from './component/Awardees';
import Guest from './component/Guest';
import Arived from './component/Arived';
import GuestDetail from './component/GuestDetail';
// import AttendeesList from './component/AttendeesList';
function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/forgetpassword' element={<ForgetPassword />} />
          <Route path='/attendence' element={<Attendence />} />
          <Route path='/demo' element={<Demo />} />
          <Route path='/setting' element={<Setting />} />
          <Route path='/total' element={<Total />} />
          <Route path='/awardees' element={<Awardees />} />
          <Route path='/guest' element={<Guest />} />
          <Route path='/checked' element={<GuestDetail/>} />
          <Route path='/arived' element={<Arived />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}
export default App;











