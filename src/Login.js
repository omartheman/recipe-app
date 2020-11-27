import React from 'react';
import Navbar from './Navbar';
import {Container, Form, Button} from 'react-bootstrap';

class Login extends React.Component {
  render(){
    return(
      <>
        <Navbar/>
        <Container>
          <Form>
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Give me password!" />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Container>
      </>
    );
  }
}

export default Login;