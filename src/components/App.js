import React from 'react';
import '../App.css';
import {Link, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Login from './Login';
import Friendslist from './Friendslist';
import AddFriend from './AddFriend';
import { axiosWithAuth } from '../util/axiosWithAuth';

function App() {
  const navigate = useNavigate();
  const logout = () => {
    axiosWithAuth().post('/logout')
      .then(res => {localStorage.removeItem('token');
        navigate('/login')
  })
      .catch(err => console.log(err.message))
  }

  return (
    <div className="App">
      <nav>FRIENDS DATABASE
        <Link to="/" className='navLink'>LOGIN.</Link>
        <Link to="/friendslist" className='navLink'><span>FRIENDSLIST.</span></Link>
        <Link to="/addfriend" className='navLink'>ADDFRIEND.</Link>
        <button onClick={logout}>LOGOUT</button>
      </nav>
      <Routes>
        <Route element={<Login />} path='/' />
        <Route element={<Login />} path='/login' />
        <Route element={<Friendslist />} token={localStorage.getItem('token')} path='/friendslist' />
        <Route element={<AddFriend />} token={localStorage.getItem('token')} path='/addfriend' />
      </Routes>
    </div>
  );
}

export default App;
