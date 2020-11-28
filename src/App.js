import './App.css';
import React from 'react';
import {Switch, Route} from 'react-router';
import RecipeUpload from './RecipeUpload';
import Home from './Home';
import Login from './Login';
import axios from 'axios';

axios.defaults.headers.common['Cache-Control'] = 'no-cache';
const url =
"http://localhost:4000/recipeapp/recipeapp-server/";
/*
"https://brittanyjewellneal.com/recipeapp/recipeapp-server/";
*/
const urlAuth = `${url}auth`;
axios.defaults.withCredentials = true;

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      loggedInUser: null
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleLoginFormChange = this.handleLoginFormChange.bind(this);
  }
  componentDidMount(){
    axios.get(urlAuth) 
    .then(res => { 
      console.log(res);
      this.setState({loggedInUser: res.data})
    }).catch(error => {console.log(error)})
  }
  handleLoginSubmit(e){
    e.preventDefault();
    const {username, password} = this.state;
    axios.post(urlAuth,     
      {
        username: username, 
        password: password 
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
  handleLoginFormChange(eTargetAttrVal, item){
    if (item === 'username'){
      this.setState(eTargetAttrVal);
    } else if (item === 'password') {
      this.setState(eTargetAttrVal);
    }
  }
  render(){
    console.log(this.state);
    const {username, password, loggedInUser} = this.state;
    return(
      <Switch>
        <Route path="/recipeapp/recipe-upload" render={() => (
          <RecipeUpload
            loggedInUser={loggedInUser}
          />
        )} />
        <Route path="/recipeapp/login" render={() => (
          <Login 
            loginSubmit={this.handleLoginSubmit}
            onLoginFormChange={this.handleLoginFormChange}
            loggedInUser={loggedInUser}
            username={username}
            password={password}
          />
        )} />
        <Route path="/recipeapp" render={() => (
          <Home
            loggedInUser={loggedInUser}
          />
        )} />
      </Switch>
    )
  }
}

export default App;