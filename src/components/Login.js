import React from 'react';

const Component = ({ onUsernameChange, onPasswordChange, validate, login, error }) => (
  <div className="container">
    <form className="form-signin">
      {error.map((err) =>
        <div className="alert alert-danger" role="alert">
          <strong>Oh snap!</strong> {err.message}
        </div>
      )}
      <h2 className="form-signin-heading">Please sign in</h2>

      <label htmlFor="username" className="sr-only">Email address</label>
      <input type="email" id="username" className="form-control" placeholder="Username" required="" autoFocus="" onFocus={onUsernameChange} onChange={onUsernameChange} onBlur={validate} />

      <label htmlFor="password" className="sr-only">Password</label>
      <input type="password" id="password" className="form-control" placeholder="Password" required="" autoFocus="" onFocus={onPasswordChange} onChange={onPasswordChange} onBlur={validate} />

      <button className="btn btn-lg btn-primary btn-block" type="button" onClick={login}>Sign in</button>
    </form>
  </div>
);

export default Component;
