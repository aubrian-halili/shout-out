import React, { PropTypes } from 'react';

const Component = ({ text, date, user }) => (
  <li className="list-group-item list-group-item-action flex-column align-items-start">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">{text}</h5>
      <small>{date}</small>
    </div>
    <small>{user}</small>
  </li>
);

Component.propTypes = React.PropTypes.shape({
  text: React.PropTypes.number,
  date: React.PropTypes.string,
  user: React.PropTypes.string,
}).isRequired;

export default Component;
