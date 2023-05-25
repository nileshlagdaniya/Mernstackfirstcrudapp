import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, Route, Routes } from 'react-router-dom'
// import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import Login from './Auth/Login/Login'
import Register from './Auth/Register/Register'
import AddEmployee from './Pages/AddEmployee/AddEmployee'
import EditEmployee from './Pages/EditEmployee/EditEmployee'
import EmployeeProfile from './Pages/EmployeeProfile/EmployeeProfile'
import Sidebar from './Components/Header/Sidebar';
import LeaveRequest from './Pages/Leave/LeaveRequest';
import Leave from './Pages/Leave/Leave';
function App() {
  const employeeToken = localStorage.getItem("token")
  return (
    <>
      <Sidebar />
      <Routes>
        {/* {employeeToken && <Route path='/' element={<Home />} />} */}
        <Route path='/' element={<Home />} />
        <Route path='/add-employee' element={<AddEmployee />} />
        {/* <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} /> */}
        <Route path='/leave' element={<Leave />} />
        <Route path='/leave/leave-request' element={<LeaveRequest />} />
        <Route path='/edit-employee/:id' element={<EditEmployee />} />
        <Route path='/employee-profile/:id' element={<EmployeeProfile />} />
        <Route path="/" exact element={<Navigate replace to={"/login"} />} />
      </Routes>
    </>
  );
}

export default App;
