import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ResetPasswordForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ email });
  };

  return (
    <section className="download features text-center" id="download">
      <div className="container">
        <div className="row">
          <div className="col-md-5 mx-auto box-shadow p-4">
            <h4>Reset Password</h4>
            <hr />
            <p>Enter your email address and we will send you a link to reset your password.</p>
            <hr />
            <form onSubmit={handleSubmit} action="https://academianerds.com/order/user/resetpass" method="POST">
              <div className="form-group row">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                  Email
                </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    name="user_email"
                    className="form-control"
                    id="inputEmail3"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="offset-sm-2 col-sm-10">
                  <button type="submit" className="btn btn-primary">
                    Send Password Reset Email
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPasswordForm;
