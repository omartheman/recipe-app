import React from 'react';
import Navbar from './Navbar';
import {Container, Form, Button} from 'react-bootstrap';

class Login extends React.Component {
  render(){
    return(
      <>
        <Navbar/>
        <Container>
          <Form action="auth" method="POST">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" required/>
          </Form>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Give me password!" required/>
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