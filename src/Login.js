import React from 'react';
import Navbar from './Navbar';
import {Container, Form, Button} from 'react-bootstrap';
import axios from 'axios';

axios.defaults.headers.common['Cache-Control'] = 'no-cache';
const url =
"https://brittanyjewellneal.com/recipeapp-server/";
/*
"http://localhost:4000/recipeapp-server/";
*/
const urlAuth = `${url}auth`;
axios.defaults.withCredentials = true;

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      loggedInUser: '',
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
    
    // .then( 
    //   axios.get(urlAuth) 
    //   .then(response => { 
    //     console.log(response);
    //   }) 
    //   .catch(error => { 
    //     console.log(error) 
    //   })
    // )
  }
  handleClick(){
    console.log('yup')
    const {username, password} = this.state;

    axios.post(urlAuth,     
      {
        username: username, 
        password: password 
      }
    )
    .then(response => {
      console.log('axios response: ', response)
    })
    .catch(error => {
      console.log(error)
    })
    .then( 
      axios.get(urlAuth) 
      .then(res => { 
        console.log(res);
        this.setState({loggedInUser: res.data})
      }) 
      .catch(error => { 
        console.log(error) 
      })
    )
  }
  render(){
    return(
      <>
        <Navbar/>
        <div>Welcome back {this.state.loggedInUser}</div>
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