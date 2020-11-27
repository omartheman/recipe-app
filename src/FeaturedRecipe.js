import React from 'react';
import './FeaturedRecipe.css';
import {Container, Image} from 'react-bootstrap';

class FeaturedRecipe extends React.Component{
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