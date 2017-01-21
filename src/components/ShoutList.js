import React, { PropTypes } from 'react';
import { ListGroup } from 'react-bootstrap';

import Shout from './Shout';

const ShoutListComponent = ({ shouts }) => (
  <ListGroup>
    {shouts.map(shout =>
      <Shout key={shout.id} {...shout} />,
    )}
  </ListGroup>
);

ShoutListComponent.propTypes = {
  shouts: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default ShoutListComponent;
