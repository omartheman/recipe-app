import React from 'react';
import Navbar from './Navbar';
import {Container} from 'react-bootstrap';
import axios from 'axios';
import global_url_variable from './global_url_variable';

const url = global_url_variable;
const urlMyRecipes = `${url}myrecipes`;
const urlAuth = `${url}auth`;

axios.defaults.headers.common['Cache-Control'] = 'no-cache';

class MyRecipes extends React.Component {
  componentDidMount() { 
    axios.get(urlMyRecipes)
    .then(res => {
      console.log('res', res)

    });
  }
  
  render(){
    return(
      <>
        <Navbar 
          loggedInUser={this.props.loggedInUser}
          onLogout={this.props.onLogout}
        />
        <Container>
          <h1>My Recipes</h1>
        </Container>
      </>
    );
  }
}

export default MyRecipes; 