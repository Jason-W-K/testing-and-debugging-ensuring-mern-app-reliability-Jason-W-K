import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import BugForm from './BugForm'; // if you moved your bug form here
import Register from './Register';
import  BugList from './BugList';


function App() {
  return (
<Router>
  <nav style={{ padding: '1rem' }}>
    <Link to="/">Bug Form</Link> | {' '}
    <Link to="/login">Login</Link> | {' '}
    <Link to="/register">Register</Link> | {' '}
    <Link to="/bugs">Bug List</Link>
  </nav>
  <Routes>
    <Route path="/" element={<BugForm />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/bugs" element={<BugList />} />

  </Routes>
</Router>
  );
}

export default App;