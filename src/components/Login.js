import React from 'react';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button, HelpBlock } from 'react-bootstrap';

const Component = ({ onUsernameChange, onPasswordChange, validate,
  usernameState, passwordState }) => (
  <Form horizontal>
    <FormGroup controlId="formHorizontalEmail" validationState={usernameState().state}>
      <Col componentClass={ControlLabel} sm={2}>
        Username
      </Col>
      <Col sm={10}>
        <FormControl type="text" placeholder="Username" onChange={onUsernameChange} onBlur={validate} />
        { usernameState().message.length > 0 &&
          <HelpBlock>{usernameState().message}</HelpBlock>
        }
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword" validationState={passwordState().state}>
      <Col componentClass={ControlLabel} sm={2}>
        Password
      </Col>
      <Col sm={10}>
        <FormControl type="password" placeholder="Password" onChange={onPasswordChange} onBlur={validate} />
        { passwordState().message.length > 0 &&
          <HelpBlock>{passwordState().message}</HelpBlock>
        }
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button>
          Login
        </Button>
      </Col>
    </FormGroup>
  </Form>
);

export default Component;
