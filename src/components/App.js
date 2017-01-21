import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Header from './Header';
import Sidebar from './Sidebar';
import ShoutListContainer from '../containers/ShoutListContainer';

const App = () => (
  <div>
    <Header />
    <Grid>
      <Row>
        <Col xs={12} md={3}>
          <Sidebar />
        </Col>
        <Col xs={12} md={9}>
          <ShoutListContainer />
        </Col>
      </Row>
    </Grid>
  </div>
);

export default App;
