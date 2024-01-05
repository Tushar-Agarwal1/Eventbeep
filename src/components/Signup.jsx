import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
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
                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                    <form action="/register" method="POST" className="needs-validation" noValidate id="registrationForm">

                      <div className="form-outline mb-4">
                        <input type="text" id="username" className="form-control form-control-lg" name="username" required />
                        <label className="form-label" htmlFor="username">Your Name</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="email" id="email" className="form-control form-control-lg" name="email" required />
                        <label className="form-label" htmlFor="email">Your Email</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="password" id="password" className="form-control form-control-lg" name="password" required />
                        <label className="form-label" htmlFor="password">Password</label>
                      </div>

                     


                      <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to="/login" className="fw-bold text-body"><u>Login here</u></Link>
                      </p>
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

export default Signup;
