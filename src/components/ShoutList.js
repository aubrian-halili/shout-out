import React, { PropTypes } from 'react';

import Shout from './Shout';

const Component = ({ shouts }) => (
  <main className="col-sm-9 col-md-10">
    <ul className="list-group">
      <li className="list-group-item active">
        <h5>Shouts Feed</h5>
      </li>
      {shouts.map(shout =>
        <Shout key={shout.id} {...shout} />,
      )}
    </ul>
  </main>
);

Component.propTypes = {
  shouts: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default Component;
