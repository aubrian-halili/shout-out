import React from 'react';

import UserList from '../containers/UserListContainer';
import ShoutList from '../containers/ShoutListContainer';

const Component = ({ name }) => (
  <div>
    <div className="container-fluid">
      <h2>Hello, {name}!</h2>
    </div>
    <div className="container-fluid">
      <div className="row">
        <UserList />
        <ShoutList />
      </div>
    </div>
  </div>
);

export default Component;
