import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import User from './User';

class Component extends React.Component {
  componentWillMount() {
    this.props.init();
  }

  render() {
    const currentUserId = this.props.currentUserId;
    const following = this.props.following;

    return (
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <h5 className="nav-link active">Shouts :</h5>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={`/dashboard/${currentUserId}`}>
            <h5>My Shouts</h5>
          </Link>
        </li>
        {following.map(user =>
          <User key={user.id} {...user} />,
        )}
      </ul>
    );
  }
}

Component.propTypes = {
  following: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default Component;
