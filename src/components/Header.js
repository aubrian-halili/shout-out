import React from 'react';
import { Link } from 'react-router';
import { Navbar, Header, Brand, Button } from 'react-bootstrap';

const Component = ({ isLoggedIn, logout }) => (
  <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
    <Link className="navbar-brand" to={'/'}>SHOUTBux</Link>

    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul className="navbar-nav mr-auto">
        {!isLoggedIn ? (
        <li className="nav-item active">
          <Link className="nav-link" to={'/login'}>Login</Link>
        </li>
        ) : (
        <li className="nav-item">
          <Link className="nav-link" to={'/'} onClick={logout}>Logout</Link>
        </li>
        )}
      </ul>
    </div>
  </nav>
);

export default Component;
