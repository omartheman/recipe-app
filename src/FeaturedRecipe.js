import React from 'react';
import './FeaturedRecipe.css';
import {Container, Image} from 'react-bootstrap';
import axios from 'axios';
import global_url_variable from './global_url_variable';

const url = global_url_variable;
const urlImagesHomeCarousel = `${url}get-images-home-carousel`;
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
    return(
      <Container>
        <h3>Featured Recipe</h3>
          <Image className="featrd-rec-img" src="https://images.unsplash.com/photo-1582169505937-b9992bd01ed9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=698&q=80" rounded fluid/>
      </Container>
    );
  }  
}

export default FeaturedRecipe; 