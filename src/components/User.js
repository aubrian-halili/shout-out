import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Component = ({ id, name }) => (
  <li className="nav-item">
    <Link className="nav-link" to={`/dashboard/${id}`}>
      <h5>{name}</h5>
    </Link>
  </li>
);

Component.propTypes = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
}).isRequired;

export default Component;
