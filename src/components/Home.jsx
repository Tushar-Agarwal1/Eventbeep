import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
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
            <button className="btn btn-signup btn-primary">Dashboard</button>
          </a>
        </div>
      </div>

      <div className="main">
        <div className="child one">
          <div className="centered-content">
            <div className="home-left-content1"><h1>CELEBRATE WITH EVENTBEEP</h1></div>
            <div className="home-left-content2"><p>A platform to manage your Events </p></div>
            
            <div className="home-left-btn">
                <Link to="/login">
              <button className="btn btn-signup btn-primary">Get Started</button>
            </Link></div>
          </div>
        </div>

        <div className="child two">
         
          <div className='centered-content'>
          <img src="../images/celebration.gif" alt="gif" />
          </div>
       
        </div>
      </div>
    </div>
  );
}

export default Home;
