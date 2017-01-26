import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import User from './User';

const Component = ({ users }) => (
  <ul className="nav nav-pills flex-column">
    <li className="nav-item">
      <h5 className="nav-link active">Menus :</h5>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={'/user'}>
        <h5>My Shouts</h5>
      </Link>
    </li>
    {users.map(user =>
      <User key={user.id} {...user} />,
    )}
  </ul>
);

Component.propTypes = {
  users: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default Component;
