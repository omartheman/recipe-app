import React, {Component} from 'react';
import {
  Switch, Route
} from 'react-router';
import RecipeUpload from './RecipeUpload';
import Home from './Home';

const About = () => (<div>ABOUT</div>);

const SwitchDemo = () => (
  <Switch>
    <Route path="/recipeapp/recipe-upload" component={RecipeUpload}/>
    <Route path="/recipeapp" component={Home} />
  </Switch>
)

export default SwitchDemo