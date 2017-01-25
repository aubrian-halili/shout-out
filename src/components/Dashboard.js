import React from 'react';

const Component = ({ name }) => (
  <div className="greeting">
    <div className="container">
      <h1 className="display-4">Hello, {name}!</h1>
      <p>Hope your having a great day.</p>
    </div>
  </div>
);

export default Component;
