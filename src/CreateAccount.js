import React from 'react';
import Navbar from './Navbar';
import {Container, Form, Button} from 'react-bootstrap';
import axios from 'axios';
import global_url_variable from './global_url_variable';

const url = global_url_variable;
axios.defaults.headers.common['Cache-Control'] = 'no-cache';
axios.defaults.withCredentials = true;

class CreateAccount extends React.Component{
  render(){
    const {loggedInUser, onLogout, onLoginFormChange, createAccSubmit} = this.props;
    return(
      <>
        <Navbar
          loggedInUser={loggedInUser}
          onLogout={onLogout}
        />
        <div>Create Account</div>
        <Container>
          <Form action="auth" onSubmit={createAccSubmit}>
            <Form.Label>Username</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter username" 
              required
              id="username"
              onChange={(e) => {
                onLoginFormChange({[e.target.id]: e.target.value}, 'username');
              }}
            />
          </Form>
          <Form.Group controlId="formBasicPassword" onKeyDown={(e) => {if (e.keyCode === 13) {}}}>
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Give me password!" 
              required
              onChange={(e) => {
                onLoginFormChange({[e.target.type]: e.target.value}, 'password');
              }} 
            />
            <Button 
              variant="primary" 
              type="submit"
              onClick={createAccSubmit}
            >
              Submit
            </Button>
          </Form.Group>
        </Container>
      </>
    )
  }
}

export default CreateAccount;