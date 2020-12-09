import React from 'react';
import Navbar from './Navbar';
import {Container} from 'react-bootstrap';
import axios from 'axios';
import global_url_variable from './global_url_variable';

const url = global_url_variable;
const urlMyRecipes = `${url}myrecipes`;
axios.defaults.headers.common['Cache-Control'] = 'no-cache';

class MyRecipes extends React.Component {
  componentDidMount() { 
    axios.get(urlMyRecipes, {
      params: {
        user: this.props.loggedInUser
      }
    }) 
    .then(response => { 
      console.log(response.data[0]);
      this.setState({recipes: response.data}); 
    }) 
    .catch(error => { 
      console.log(error) 
    }) 
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