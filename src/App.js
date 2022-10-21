import React from "react";
import Home from "./Pages/Home";
import Login from './Pages/Login';
import Signup from "./Pages/Signup";
import Register from "./Pages/Register";
import AdminLogin from './Pages/AdminLogin';
import AdminHome from './Pages/AdminHome';
import ApplicationList from './Pages/ApplicationList';
import Record from './Pages/Record';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route path='/'  element={<Home />} />
        </Routes>

        <Routes >
          <Route path='/login'  element={<Login />} />
        </Routes>

        <Routes >
          <Route path='/signup'  element={<Signup />} />
        </Routes>

        <Routes >
          <Route path='/register'  element={<Register />} />
        </Routes>

        <Routes >
          <Route path='/admin'  element={<AdminLogin />} />
        </Routes>

        <Routes >
          <Route path='/adminhome'  element={<AdminHome />} />
        </Routes>
        
        <Routes >
          <Route path='/applicationlist'  element={<ApplicationList />} />
        </Routes>

        <Routes >
          <Route path='/record'  element={<Record />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
