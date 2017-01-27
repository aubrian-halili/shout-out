import React, { PropTypes } from 'react';
import _ from '../util/_';

const Component = ({ text, updatedAt, user }) => (
  <li className="list-group-item list-group-item-action flex-column align-items-start">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">{text}</h5>
      <small>{_.timeTodayDateElse(updatedAt)}</small>
    </div>
    <small>{user}</small>
  </li>
);

Component.propTypes = React.PropTypes.shape({
  text: React.PropTypes.number,
  updatedAt: React.PropTypes.string,
  user: React.PropTypes.string,
}).isRequired;

export default Component;
