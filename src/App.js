import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import ForgetPassword from './component/ForgetPassword';
import Attendence from './component/Attendence';
import Demo from './component/Demo';
import AttendanceList from './component/AttendanceList';
// import AttendeesList from './component/AttendeesList';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/forgetpassword' element={<ForgetPassword/>} />
          <Route path='/attendence' element={<Attendence/>} />
          <Route path='/demo' element={<Demo/>} />
          <Route path='/attendancelist' element={<AttendanceList/>} />

        </Routes>
      </BrowserRouter>

    </>
  );
}
export default App;










// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import LogInPage from './pages/LogInPage'

// export default function App() {
//   return (
//     <>
//  <BrowserRouter>
//          <Routes>
//            <Route path='/' element={<LogInPage/>} />
//            {/* <Route path='/forgetpassword' element={<ForgetPassword/>} /> */}
//            {/* <Route path='/attendence' element={<Attendence/>} /> */}
//            {/* <Route path='/demo' element={<Demo/>} /> */}
//            {/* <Route path='/attendancelist' element={<AttendanceList/>} /> */}

//          </Routes>
//        </BrowserRouter>

//     </>
//   )
// }
