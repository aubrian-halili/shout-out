import React from 'react';

import Header from '../containers/HeaderContainer';

const App = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default App;
