import React from 'react';
import Navbar from './Navbar';
import {Container, Form, Button} from 'react-bootstrap';
import axios from 'axios';

axios.defaults.headers.common['Cache-Control'] = 'no-cache';
const url =
"http://localhost:4000/recipeapp_server/";
/*
"https://brittanyjewellneal.com/recipeapp_server";
*/

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