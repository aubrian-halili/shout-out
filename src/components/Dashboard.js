import React from 'react';

import UserList from '../containers/UserListContainer';

const Component = ({ name, children }) => (
  <div>
    <div className="container-fluid">
      <h2>Hello, {name}!</h2>
    </div>
    <div className="container-fluid">
      <div className="row">
        <nav className="col-sm-3 col-md-2 hidden-xs-down sidebar">
          <UserList />
        </nav>
        <main className="col-sm-9 col-md-10">
          {children}
        </main>
      </div>
    </div>
  </div>
);

export default Component;
