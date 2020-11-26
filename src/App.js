import './App.css';
import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Switch from './Switch';

axios.defaults.headers.common['Cache-Control'] = 'no-cache';
const url =
"https://brittanyjewellneal.com/recipeapp_server";
/*
"http://localhost:4000/recipeapp_server/";
*/

const App = () => (
  <div>
    <Link to="/">HOME</Link>
    <Link to="/about">ABOUT</Link>
    <Link to="/recipe-upload">Recipe Upload</Link>

    <Switch/>
  </div>
)

export default App;
