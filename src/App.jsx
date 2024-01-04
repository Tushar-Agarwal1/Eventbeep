// App.js or your component file
import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="fixed-nav-details">
        <div className="logo">
          <h1>EventBeep</h1>
        </div>
        <div className="list">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/testimonials">Testimonials</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="btns">
          <a href="/login">
            <button className="btn btn-signup">Dashboard</button>
          </a>
        </div>
      </div>

      <div className="main">
        <div className="child one">
          <div className="centered-content">
            <div className="home-left-content1"><h1>CELEBRATE WITH EVENTBEEP</h1></div>
            <div className="home-left-content2"><p>A platform to manage your Events </p></div>
            
            <div className="home-left-btn"><a className="btn btn-signup" href="/dashboard">Get started</a></div>
          </div>
        </div>

        <div className="child two">
         
          <div className='centered-content'>
          <img src="/images/celebration.gif" alt="gif" />
          </div>
       
        </div>
      </div>
    </>
  );
}

export default App;
