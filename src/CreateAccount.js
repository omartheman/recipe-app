import React from 'react';
import { Alert, Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import global_url_variable from './global_url_variable';
import './CreateAccount.css';
import { Redirect } from 'react-router-dom';

const url = global_url_variable;
const urlAuth = `${url}auth`;
const urlCreateAcc = `${url}create-account`;
const urlCheckExistingUsernames = `${url}check-existing-usernames`;
axios.defaults.headers.common['Cache-Control'] = 'no-cache';
axios.defaults.withCredentials = true;

class CreateAccount extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordConfirm: '',
      firstName: '',
      lastName: '',
      email:'',
      emailConfirm: '',
      redirect: false,
      errorMessage: null
    }
    this.handleCreateAccSubmit = this.handleCreateAccSubmit.bind(this);
    this.handleCreateAccFormChange = this.handleCreateAccFormChange.bind(this);
  }
  handleCreateAccSubmit(e){
    //create a post request that will upload the new data to the database, to create the new account.
    const {username, password, passwordConfirm, firstName, lastName, email, emailConfirm} = this.state;
    
    if (password !== passwordConfirm) {
      this.setState({errorMessage: 
        "Please check passwords, they don't match! 🤯"
      })
      return;
    } 
    if (email !== emailConfirm) {
      this.setState({errorMessage: 
        "Please check your email inputs, they don't match! 😵"
      })
      return;
    }
    if (username === '' || password === '' || firstName === '' || lastName === '' || email === '') {
      this.setState({errorMessage: 
        "Please fill in all fields before submitting. 🤓"
      })
      return;
    }
    e.preventDefault();
    axios.post(urlCheckExistingUsernames, {username})
    .then(res => {
      console.log('check username result: ', res);
      if (res.data.length > 0) {
        this.setState({errorMessage: "That username already exists! 🤷"})
        return;
      }
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
      .then(response => {
        const {username, password} = this.state;
        axios.post(urlAuth,     
          {
            username: username, 
            password: password 
          }
        )
        .then(response => {
          this.props.setNewLoggedInUser(username);
          console.log('axios response: ', response)
        }).catch(error => {console.log(error)})
        .then( 
          axios.get(urlAuth) 
          .then(res => { 
            console.log(res);
            this.setState({loggedInUser: res.data})
          }).catch(error => {console.log(error)})
        )
        .then(this.setState({redirect: true}))
      })
    }).catch(error => {console.log(error)})
  }

  handleCreateAccFormChange(eTargetAttrVal, item){
    if (item === 'username'){
      this.setState(eTargetAttrVal);
    } else if (item === 'password') {
      //Check that password and verifypassword are same 
      // Set state for password and verify to check they're same 
      this.setState(eTargetAttrVal);
    }
  }
  render(){
    console.log('this.state', this.state)
    return(
      <>
        {this.state.redirect ? <Redirect to="/recipeapp/create-account-success" /> : null}
        <Container className="create-account-form-container">
          <h1>Create Account</h1>
          <Form action="auth" onSubmit={this.handleCreateAccSubmit}>
            <div className="create-account-form-section">
              <Form.Label>First Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="What's your first name? 🦩" 
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
            </div>
            <div className="create-account-form-section">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="How about your email? 🦜" 
                required
                id="email"
                onChange={(e) => {
                  this.handleCreateAccFormChange({[e.target.id]: e.target.value}, 'username');
                  this.setState({email: e.target.value});
                }}
              />
              <Form.Label>Confirm Email</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Please confirm email." 
                required
                onChange={(e) => {
                  this.setState({emailConfirm: e.target.value});
                }}
              />
            </div>
            <div className="create-account-form-section">
            </div>
            <Form.Label>Username</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Your awesome username here. 😺" 
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
                this.setState({password: e.target.value});
              }} 
            />
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Confirm password 😁" 
              required
              onChange={(e) => {
                this.setState({passwordConfirm: e.target.value});
              }} 
            />
          </Form.Group>
          {this.state.errorMessage && 
            <Alert variant="warning">{this.state.errorMessage}</Alert>
          }
          <Button 
            variant="primary" 
            type="submit"
            onClick={this.handleCreateAccSubmit}
            className="submit-button-general"
          >
            Sign Me Up!
          </Button>
        </Container>
      </>
    )
  }
}

export default CreateAccount;