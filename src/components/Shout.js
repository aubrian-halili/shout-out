import React, { PropTypes } from 'react';
import { Popover } from 'react-bootstrap';
import _ from '../util/_';

const Component = ({ id, text, updatedAt, user, deleteShout }) => (
  <li className="list-group-item list-group-item-action flex-column align-items-start">
    <div className="d-flex w-100 justify-content-between">
      <div>
        <h5 className="mb-1">{text}</h5>
      </div>
      <div className="col-md-4">
        <small>{_.timeTodayDateElse(updatedAt)}</small>
        <button type="button" className="btn btn-link">Edit</button>
        <button type="button" className="btn btn-link" onClick={() => deleteShout(id)}>Delete</button>
      </div>
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
