import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Component = ({ id, name }) => (
  <li className="nav-item">
    <Link className="nav-link" to={`/user/${id}`}>
      <h5>{name}</h5>
    </Link>
  </li>
);

Component.propTypes = React.PropTypes.shape({
  id: React.PropTypes.number,
  name: React.PropTypes.string,
}).isRequired;

export default Component;
