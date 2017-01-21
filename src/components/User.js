import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { ListGroupItem } from 'react-bootstrap';

const UserComponent = (user) => (
  <ListGroupItem>
    <Link to={`/user/${user.id}`}>
      <h4>{user.name}</h4>
    </Link>
  </ListGroupItem>
);

UserComponent.propTypes = React.PropTypes.shape({
  id: React.PropTypes.number,
  name: React.PropTypes.string,
}).isRequired;

export default UserComponent;
