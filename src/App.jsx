// App.js
import React from 'react';
import {  Routes,  Route,  } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
 

  return (
    <>
  
    <Routes>
     <Route path='/' element={<Home/>}> /</Route>
     <Route path='/login' element={<Login/>}> /</Route>
     <Route path='/signup' element={<Signup/>}> /</Route>



        
    </Routes>
       
    </>
       
  );
}

export default App;