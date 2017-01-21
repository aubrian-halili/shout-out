import React, { PropTypes } from 'react';
import { ListGroup } from 'react-bootstrap';

import User from './User';

const UserListComponent = ({ users }) => (
  <ListGroup>
    {users.map(user =>
      <User key={user.id} {...user} />,
    )}
  </ListGroup>
);

UserListComponent.propTypes = {
  users: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default UserListComponent;
