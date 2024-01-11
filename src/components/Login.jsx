import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


function Login() {
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState(''); 

  const loginSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
     
      password: password
    };

    try {
      const response = await axios.post("/api/login", userData);
      console.log(response.data); // Assuming your server sends back useful information
      console.log(response.status);
      // Optionally, you can redirect the user to another page after successful signup
      // For example, if you are using React Router:
      // history.push('/login');
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div>
      <section className="vh-100"
        style={{ background: "linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5))" }}
      >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: '15px' }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">Login your account</h2>

                    <form>

                      <div className="form-outline mb-4">
                        <input type="text" id="username" className="form-control form-control-lg" name="username" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        <label className="form-label" htmlFor="username">Your Name</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="password" id="password" className="form-control form-control-lg" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                        <label className="form-label" htmlFor="password">Password</label>
                      </div>

                      {/* <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" >Login</button>
                      </div> */}

                      <p className="text-center text-muted mt-5 mb-0">
                        Do not have an account? <Link to="/signup" className="fw-bold text-body"><u>Signup here</u></Link>
                      </p>
                      <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={loginSubmit}>Login</button>
                      </div>

                    </form>
                    

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}

export default Login;
