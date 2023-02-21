import React from 'react'
import { Link, Routes, Route, Navigate } from 'react-router-dom'

function Public() {
  return 'Public Page'
}
function Login() {
  return 'Login Page'
}
function Protected() {
  if (!localStorage.getItem('token')) {
    return <Navigate to="/login" />
  }
  return 'You have a token so here is the protected stuff...'
}
export default function App() {
  return (
    <div>
      <ul>
        <li><Link to="/public">Public Page</Link></li>
        <li><Link to="/protected">Protected Page</Link></li>
      </ul>
      <Routes>
        <Route path="public" element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route path='protected' element={<Protected />} />
      </Routes>
    </div>
  );
}