import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import ForgetPassword from './component/ForgetPassword';
import Awardees from './component/Awardees';
import NavBar from './component/NavBar';
import GuestDetail from './component/GuestDetail';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AttendeeList from './component/AttendeeList';
import Guest from './component/Guest';
import CheckedIn from './component/CheckedIn';
import NotArrived from './component/NotArrived';
import AllSettings from './component/AllSettings';
// import AttendeesList from './component/AttendeesList';
function App() {
  const [token, setToken] = useState("");
  // const navigate = useNavigate();
  useEffect(() => {
    const getToken = async () => {
      let token = await AsyncStorage.getItem('token');
      console.log(token)
      setToken(token)
    }
    getToken()
  }, [])
  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<AttendeeList />} />
          <Route path='/awardees' element={<Awardees />} />
          <Route path='/allsettings' element={<AllSettings />} />
          <Route path='/guestdetail' element={<GuestDetail />} />
          <Route path='/guest' element={<Guest />} />
          <Route path='/checkedin' element={<CheckedIn />} />
          <Route path='/notarrived' element={<NotArrived />} />
          <Route path='/forgetpassword' element={<ForgetPassword />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}
export default App;











