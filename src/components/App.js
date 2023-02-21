import React from 'react';
import '../App.css';
import {Link, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Friendslist from './Friendslist'
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <div className="App">
      <nav>FRIENDS DATABASE
        <Link to="/" className='navLink'>LOGIN.</Link>
        <Link to="/friendslist" className='navLink'><span>FRIENDSLIST.</span></Link>
        <Link to="/addfriend" className='navLink'>ADDFRIEND.</Link>
        <button>LOGOUT</button>
      </nav>
      <Routes>
        <Route element={<Login />} path='/' />
        <Route element={<Login />} path='/login' />
        <Route 
          element={<PrivateRoute
            component={Friendslist} />}
          path='/friendslist'
        />
      </Routes>
    </div>
  );
}

export default App;
