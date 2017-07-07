import React from 'react';

import Header from '../containers/HeaderContainer';

const App = ({ children }) => {
  return (
    <div>
      <Header />
      <div>
        Modification here
      <div>
      {children}
    </div>
  );
};

export default App;
