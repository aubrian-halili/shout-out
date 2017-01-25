import React, { PropTypes } from 'react';

import User from './User';

const Component = ({ users }) => (
  <nav className="col-sm-3 col-md-2 hidden-xs-down sidebar">
    <ul className="nav nav-pills flex-column">
      <li className="nav-item">
        <h5 className="nav-link active">Following</h5>
      </li>
      {users.map(user =>
        <User key={user.id} {...user} />,
      )}
    </ul>
  </nav>
);

Component.propTypes = {
  users: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default Component;
