import React from 'react';
import Navbar from './Navbar';
import {Container, Form, Button} from 'react-bootstrap';
import axios from 'axios';
import global_url_variable from './global_url_variable';
import './CreateAccount.css';

const url = global_url_variable;
const urlAuth = `${url}auth`;
const urlCreateAcc = `${url}create-account`;
axios.defaults.headers.common['Cache-Control'] = 'no-cache';
axios.defaults.withCredentials = true;

class CreateAccount extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email:''
    }
    this.handleCreateAccSubmit = this.handleCreateAccSubmit.bind(this);
    this.handleCreateAccFormChange = this.handleCreateAccFormChange.bind(this);
  }
  handleCreateAccSubmit(e){
    //create a post request that will upload the new data to the database, to create the new account.
    const {username, password, firstName, lastName, email} = this.state;
    e.preventDefault();
    axios.post(urlCreateAcc,     
      {
        username: username, 
        password: password,
        firstName: firstName,
        lastName: lastName,
        email: email
      }
    )
    .then(response => {
      console.log('axios response: ', response)
    }).catch(error => {console.log(error)})
    .then(
      axios.get(urlAuth) 
      .then(res => { 
        console.log(res);
        this.setState({loggedInUser: res.data})
      }).catch(error => {console.log(error)})
    )
  }
  handleCreateAccFormChange(eTargetAttrVal, item){
    if (item === 'username'){
      this.setState(eTargetAttrVal);
    } else if (item === 'password') {
      this.setState(eTargetAttrVal);
    }
  }
  render(){
    console.log('this.state', this.state)
    const {loggedInUser, onLogout} = this.props;
    return(
      <>
        <Navbar
          loggedInUser={loggedInUser}
          onLogout={onLogout}
        />
        <div>Create Account</div>
        <Container className="create-account-form-container">
          <Form action="auth" onSubmit={this.handleCreateAccSubmit}>
            <Form.Label>First Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="What's your first name?" 
              required
              id="firstName"
              onChange={(e) => {
                this.handleCreateAccFormChange({[e.target.id]: e.target.value}, 'username');
              }}
            />
            <Form.Label>Last Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Tell us your last name!" 
              required
              id="lastName"
              onChange={(e) => {
                this.handleCreateAccFormChange({[e.target.id]: e.target.value}, 'username');
              }}
            />

            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="How about your email?" 
              required
              id="email"
              onChange={(e) => {
                this.handleCreateAccFormChange({[e.target.id]: e.target.value}, 'username');
              }}
            />

            <Form.Label>Username</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Your awesome username here." 
              required
              id="username"
              onChange={(e) => {
                this.handleCreateAccFormChange({[e.target.id]: e.target.value}, 'username');
              }}
            />
          </Form>
          <Form.Group controlId="formBasicPassword" onKeyDown={(e) => {if (e.keyCode === 13) {}}}>
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Shh, it's a secret!" 
              required
              onChange={(e) => {
                this.handleCreateAccFormChange({[e.target.type]: e.target.value}, 'password');
              }} 
            />
            <Button 
              variant="primary" 
              type="submit"
              onClick={this.handleCreateAccSubmit}
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