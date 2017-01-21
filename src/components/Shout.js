import React, { PropTypes } from 'react';
import { ListGroupItem } from 'react-bootstrap';

const ShoutComponent = (shout) => (
  <ListGroupItem>
    <p>{shout.text}</p>
    <p>{shout.date}</p>
    <p>{shout.user}</p>
  </ListGroupItem>
);

ShoutComponent.propTypes = React.PropTypes.shape({
  text: React.PropTypes.number,
  date: React.PropTypes.string,
  user: React.PropTypes.string,
}).isRequired;

export default ShoutComponent;
