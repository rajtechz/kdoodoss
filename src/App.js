import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import ForgetPassword from './component/ForgetPassword';
import Setting from './component/Setting';
import Total from './component/Total';
import NavBar from './component/NavBar';
import Awardees from './component/Awardees';
import Guest from './component/Guest';
import Arived from './component/Arived';
import GuestDetail from './component/GuestDetail';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigate } from "react-router-dom";
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

          <Route path='/' element={<Total />} />
          <Route path='/setting' element={<Setting />} />
          <Route path='/guestdetail' element={<GuestDetail />} />

          

          <Route path='/arived' element={<Arived />} /> 
          {/* <Route path='/awardees' element={<Awardees />} />
          <Route path='/guest' element={<Guest />} />
          <Route path='/checked' element={<GuestDetail />} />
          */}
        </Routes>
      </BrowserRouter>

    </>
  );
}
export default App;











