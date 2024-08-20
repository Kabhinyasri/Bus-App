import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Find from './Pages/Find';
import Schedule from './Pages/Schedule';
import Header from './Pages/Header';

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Find/>}/>
        <Route path='/schedule' element={<Schedule/>}/>
      </Routes>
    </Router> 
  );
};

export default App;
