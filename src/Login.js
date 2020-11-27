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
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() { 
    axios.get(url) 
    .then(response => { 
      console.log(response.data[0]);
    }) 
    .catch(error => { 
      console.log(error) 
    }) 
  }
  handleClick(){
    const {username, password} = this.state;
    axios.post(`${url}auth`,     
      {
        username: username, 
        password: password 
      }
    )
    .then(response => {console.log('axios response', response)})
  }
  componentDidUpdate(){console.log(this.state)}
  render(){
    return(
      <>
        <Navbar/>
        <Container>
          <Form action="auth" method="POST">
            <Form.Label>Username</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter username" 
              required
              id="username"
              onChange={(e) => {
                this.setState({[e.target.id]: e.target.value})
              }} 
            />
          </Form>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Give me password!" 
              required
              onChange={(e) => {
                this.setState({[e.target.type]: e.target.value})
              }} 
            />
            <Button 
              variant="primary" 
              type="submit"
              onClick={this.handleClick}
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