import './App.css';
import React from 'react';
import {Switch, Route} from 'react-router';
import RecipeUpload from './RecipeUpload';
import Home from './Home';
import Login from './Login';

const App = () => (
  <Switch>
    <Route path="/recipeapp/recipe-upload" component={RecipeUpload}/>
    <Route path="/recipeapp" component={Home} />
    <Route path="/recipeapp/login" component={Login} />
  </Switch>
)

export default App;