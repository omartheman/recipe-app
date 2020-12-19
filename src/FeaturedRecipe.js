import React from 'react';
import './FeaturedRecipe.scss';
import { Container, Image } from 'react-bootstrap';
import axios from 'axios';
import global_url_variable from './global_url_variable';
import { Link } from 'react-router-dom';

const url = global_url_variable;
const urlFeatured = `${url}get-featured-recipe`;

class FeaturedRecipe extends React.Component{
  state = {
    featuredRecipe: []
  }
  componentDidMount(){
    axios.get(urlFeatured)
    .then(res => {
      console.log('featured res', res);
      this.setState({featuredRecipe: res.data})
    })
  }
  render(){
    const {featuredRecipe} = this.state;
    let featuredRecipeEl =
      <Container as={Link} to={`https://brittanyjewellneal.com/recipes/${featuredRecipe[0]}`}>
        <h3>Featured Recipe: {featuredRecipe[2]}</h3>
          <Image 
            className="featrd-rec-img" 
            src={`https://brittanyjewellneal.com/uploaded_files/${featuredRecipe[1]}`}  
            rounded fluid
          />
          <p>{featuredRecipe[3]}</p>
      </Container>
    ;
    if (url === "http://localhost:4000/recipeapp/recipeapp-server/") {
      featuredRecipeEl = 
        <Container className="featured-recipe-container" as={Link} to="https://unsplash.com/">
          <h3>Featured Recipe: Fried Eggs</h3>
          <Image className="featrd-rec-img" src="https://images.unsplash.com/photo-1582169505937-b9992bd01ed9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=698&q=80" rounded fluid/>
          <p>Lorem ipsum recipe shit</p>
        </Container>
      ;
    }
    return(
      <>
        {this.state.featuredRecipe.length > 0 ? featuredRecipeEl : null}
      </>
    );
  }  
}

export default FeaturedRecipe; 