import React from 'react';
import Navbar from './NavbarContainer';
import {Container, Form, Button} from 'react-bootstrap';
import axios from 'axios';
import global_url_variable from './global_url_variable';

const url = global_url_variable;
axios.defaults.headers.common['Cache-Control'] = 'no-cache';
axios.defaults.withCredentials = true;

class Login extends React.Component {
  componentDidMount() { 
    axios.get(url) 
    .then(response => { 
      console.log(response.data[0]);
    }) 
    .catch(error => { 
      console.log(error) 
    }) 
  }
  render(){
    const {loginSubmit, loggedInUser, onLoginFormChange, onLogout} = this.props;
    console.log('on login page',loginSubmit, loggedInUser, onLoginFormChange, onLogout)
    return(
      <>
        <Navbar 
          loggedInUser={loggedInUser}
          onLogout={onLogout}
        />
        <div>Welcome back {loggedInUser}</div>
        <Container>
          <Form action="auth" onSubmit={loginSubmit}>
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
          <Form.Group controlId="formBasicPassword" onKeyDown={(e) => {if (e.keyCode === 13) {loginSubmit(e)}}}>
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
              onClick={loginSubmit}
            >
              Submit
            </Button>
          </Form.Group>
        </Container>
      </>
    );
  }
}

export default Login;