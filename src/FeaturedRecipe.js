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
      this.setState({featuredRecipe: res.data});
      this.props.setFeaturedRecipeId(res.data[0]);
      console.log('featured res id', res.data[0]);
    })
  }
  render(){
    const {featuredRecipe} = this.state;
    let featuredRecipeEl =
      <Container className="featured-recipe-container" as={Link} to={`/recipeapp/recipe/${featuredRecipe[0]}`}>
          <h3>Featured Recipe: {featuredRecipe[2]}</h3>
          <Image 
            className="featrd-rec-img" 
            src={`https://omarshishani.com/uploaded_files/${featuredRecipe[1]}`}  
            rounded fluid
          />
          <h4>{featuredRecipe[3]}</h4>
      </Container>
    ;
    if (url === "http://localhost:4000/recipeapp/recipeapp-server/") {
      featuredRecipeEl = 
      <>
        <Container className="featured-recipe-container" as={Link} to={`/recipeapp/recipe/1`}>
          <h3>Featured Recipe: Fried Eggs</h3>
          <Image className="featrd-rec-img" src="https://images.unsplash.com/photo-1582169505937-b9992bd01ed9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=698&q=80" rounded fluid/>
          <h4>Lorem ipsum recipe shit</h4>
        </Container>
      </>
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