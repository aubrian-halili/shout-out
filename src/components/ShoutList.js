import React, { PropTypes } from 'react';

import Shout from '../containers/ShoutContainer';

class Component extends React.Component {
  componentDidMount() {
    const userId = this.props.params.userId;
    this.props.init(userId);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.params.userId !== nextProps.params.userId) {
      const userId = nextProps.params.userId;
      this.props.init(userId);
      return false;
    }
    return true;
  }

  render() {
    const shouts = this.props.shouts;

    return (
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
  }
}

Component.propTypes = {
  shouts: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default Component;
