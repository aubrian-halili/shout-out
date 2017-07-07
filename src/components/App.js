import React from 'react';

import Header from '../containers/HeaderContainer';

const App = ({ children }) => {
  return (
    <div>
      <Header />
      <This is a bug />
      {children}
    </div>
  );
};

export default App;
