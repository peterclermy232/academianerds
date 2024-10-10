import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ email, password });
  };

  return (
    <section className="download features" id="download">
      <div className="row justify-content-center">
        <div className="col-md-5 mx-auto box-shadow p-4">
          <h4 className="text-center">Log in</h4>
          <div className="col-md-12">
            <form onSubmit={handleSubmit} action="https://academianerds.com/order/user/loginprocess" method="POST">
              <div className="form-group">
                <label htmlFor="inputEmail3" className="text-muted">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  className="form-control"
                  id="inputEmail3"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="inputPassword3" className="text-muted">
                  Password
                </label>
                <input
                  type="password"
                  name="user_pass"
                  className="form-control"
                  id="inputPassword3"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <small>
                  <a href="/reset">Forgot Password?</a>
                </small>
              </div>

              <div className="form-group text-center">
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
