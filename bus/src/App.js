import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Find from './component/Find';
import Schedule from './component/Schedule';
import Header from './component/Header';
import Login from './component/Login';
import Manage from './component/Manage';

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Find/>}/>
        <Route path='/schedule' element={<Schedule/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/manage' element={<Manage/>}/>
      </Routes>
    </Router> 
  );
};

export default App;
