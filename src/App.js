import './App.css';
import './App.scss';
import React from 'react';
import {Switch, Route} from 'react-router';
import RecipeUpload from './RecipeUpload';
import Home from './Home';
import Login from './Login';
import MyRecipes from './MyRecipes';
import axios from 'axios';
import CreateAccount from './CreateAccount';
import global_url_variable from './global_url_variable';
import RecipePage from './RecipePage';
import RecipeUploadSuccess from './RecipeUploadSuccess';
import AllRecipes from './AllRecipes';
import NavbarContainer from './NavbarContainer';
import CreateAccountSuccess from './CreateAccountSuccess';
import ToTry from './ToTry';
import EditRecipe from './EditRecipe';

const url = global_url_variable;
const urlAuth = `${url}auth`;
axios.defaults.headers.common['Cache-Control'] = 'no-cache';
axios.defaults.withCredentials = true;

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      loggedInUser: null,
      loggedInUserError: false,
      intervalId: null
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleLoginFormChange = this.handleLoginFormChange.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleNewLoggedInUser = this.handleNewLoggedInUser.bind(this);
    this.checkLoggedIn = this.checkLoggedIn.bind(this);
  }
  componentDidMount(){
    axios.get(urlAuth) 
    .then(res => { 
      this.setState({loggedInUser: res.data})
    }).catch(error => {console.log(error)})
    const intervalId = setInterval(this.checkLoggedIn, 2000);
    this.setState({intervalId: intervalId});
  }
  checkLoggedIn(){
    axios.get(urlAuth) 
    .then(res => { 
      console.log('loggedInUser: ', res.data);
      this.setState({loggedInUser: res.data})
    }).catch(error => {
      console.log(error)
      console.log('Axios error. User logged out.')
      if (this.state.loggedInUserError === false) {
        console.log('Axios error. User logged out.')
        if (url !== 'http://localhost:4000/recipeapp/recipeapp-server/'){
          alert("There was an error with the server. 🤬 Alert the Webmaster!");
        }
        this.setState({loggedInUserError: true});
      }
      this.setState({loggedInUser: null})
    })
  }
  componentWillUnmount(){
    clearInterval(this.state.intervalId);
  }
  handleNewLoggedInUser(newLoggedInUser){
    console.log('new logged in user: ',newLoggedInUser)
    this.setState({loggedInUser: newLoggedInUser})
  }
  handleLoginSubmit(e){
    console.log('login clicked')
    e.preventDefault();
    const {username, password} = this.state;
    console.log('error not here')
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
        this.setState({loggedInUser: res.data}, ()=>{console.log('userloggedin',res.data)})
      }).catch(error => {console.log(error)})
    )
  }
  handleLoginFormChange(eTargetAttrVal, item){
    console.log('loginformchage')
    if (item === 'username'){
      this.setState(eTargetAttrVal);
    } else if (item === 'password') {
      this.setState(eTargetAttrVal);
    }
  }
  handleLogout(){
    this.setState({loggedInUser: null})
  }
  render(){
    const {username, password, loggedInUser} = this.state;
    const navbar = 
      <NavbarContainer
        loginSubmit={this.handleLoginSubmit}
        onLoginFormChange={this.handleLoginFormChange}
        loggedInUser={loggedInUser}
        onLogout={this.handleLogout}
        username={username}
        password={password}
      />
    ;
    return(
      <Switch>
        <Route path="/recipeapp/to-try" render={() => (
          <>
            <ToTry
              loggedInUser={loggedInUser}
              onLogout={this.handleLogout}
              loginSubmit={this.handleLoginSubmit}
              onLoginFormChange={this.handleLoginFormChange}
              username={username}
              password={password}
            />
          </>
        )} />
        <Route path="/recipeapp/create-account-success" render={() => (
          <>
            {navbar}
            <CreateAccountSuccess
              loggedInUser={loggedInUser}
              onLogout={this.handleLogout}
            />
          </>
        )} />
        <Route path="/recipeapp/recipe-upload-success" render={() => (
          <>
            {navbar}
            <RecipeUploadSuccess
              loggedInUser={loggedInUser}
              onLogout={this.handleLogout}
            />
          </>
        )} />
        <Route path="/recipeapp/recipe/:recipeId" render={(props) => (
          <>
            {navbar}
            <RecipePage
              {...props}
              loggedInUser={loggedInUser}
              onLogout={this.handleLogout}
            />
          </>
        )} />
        <Route path="/recipeapp/edit-recipe/:recipeId" render={(props) => (
          <>
            {navbar}
            <EditRecipe
              {...props}
              loggedInUser={loggedInUser}
              onLogout={this.handleLogout}
            />
          </>
        )} />
        <Route path="/recipeapp/all-recipes" render={() => (
          <>
            {navbar}
            <AllRecipes
              loggedInUser={loggedInUser}
              onLogout={this.handleLogout}
            />
          </>
        )} />
        <Route path="/recipeapp/myrecipes" render={() => (
          <>
            {navbar}
            <MyRecipes
              loggedInUser={loggedInUser}
              onLogout={this.handleLogout}
            />
          </>
        )} />
        <Route path="/recipeapp/recipe-upload" render={() => (
          <>
            {navbar}
            <RecipeUpload
              loggedInUser={loggedInUser}
              onLogout={this.handleLogout}
            />
          </>
        )} />
        <Route path="/recipeapp/login" render={() => (
          <>
            {navbar}
            <Login 
              loggedInUser={loggedInUser}
              onLogout={this.handleLogout}
              onLoginFormChange={this.handleLoginFormChange}
              loginSubmit={this.handleLoginSubmit}
              username={username}
              password={password}
            />
          </>
        )} />
        <Route path="/recipeapp/create-account" render={() => (
          <>
            {navbar}
            <CreateAccount
              loggedInUser={loggedInUser}
              onLogout={this.handleLogout}
              onLoginFormChange={this.handleLoginFormChange}
              setNewLoggedInUser={this.handleNewLoggedInUser}
            />
          </>
        )} />
        <Route path="/recipeapp" render={() => (
          <>
            {navbar}
            <Home
              loggedInUser={loggedInUser}
              onLogout={this.handleLogout}
            />
          </>
        )} />
      </Switch>
    )
  }
}

export default App;