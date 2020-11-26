import React, {Component} from 'react';
import {
  Switch, Route
} from 'react-router';
import RecipeUpload from './RecipeUpload';

const Homepage = () => (<div>HOMEPAGE</div>);
const About = () => (<div>ABOUT</div>);

const SwitchDemo = () => (
  <Switch>
    <Route path="/recipe-upload" component={RecipeUpload}/>
    <Route path="/about" component={About} />
    <Route path="/" component={Homepage} />
  </Switch>
)

export default SwitchDemo