import React from 'react';
import './FeaturedRecipe.scss';
import './LargeRecipesHome.scss';
import { Container, Image } from 'react-bootstrap';
import axios from 'axios';
import global_url_variable from './global_url_variable';
import { Link } from 'react-router-dom';

const url = global_url_variable;
const urlLarge = `${url}get-large-recipes`;

class LargeRecipesHome extends React.Component{
  state = {
    largeRecipes: []
  }
  componentDidMount(){
    axios.post(urlLarge, {
      featuredRecipeId: this.props.featuredRecipeId
    })
    .then(res => {
      console.log('Large recipes', res);
      this.setState({largeRecipes: res.data})
    })
  }
  componentDidUpdate(prevProps){
    if (prevProps.featuredRecipeId !== this.props.featuredRecipeId){
      axios.post(urlLarge, {
        featuredRecipeId: this.props.featuredRecipeId
      })
      .then(res => {
        this.setState({largeRecipes: res.data})
      })
    }
  }
  render(){
    const {largeRecipes} = this.state;
    const {featuredRecipeId} = this.props;
    let largeRecipeEl =
    largeRecipes.map((x, i, a) => (
      <Link className="large-recipe-container" as={Link} to={`/recipeapp/recipe/${largeRecipes[i][0]}`}>
          <h3>{largeRecipes[i][2]}</h3>
          <Image 
            className="featrd-rec-img" 
            src={`https://omarshishani.com/uploaded_files/${largeRecipes[i][1]}`}  
            rounded fluid
          />
          <h4>{largeRecipes[i][3]}</h4>
      </Link>
    ));
    if (url === "http://localhost:4000/recipeapp/recipeapp-server/") {
      largeRecipeEl = largeRecipes.map((x, i, a) => (
        <>
          <Link className="large-recipe-container" to={`/recipeapp/recipe/1`}>
            <h3>Featured Recipe: Fried Eggs Recipe #{i+1}</h3>
            <Image className="featrd-rec-img" src="https://images.unsplash.com/photo-1582169505937-b9992bd01ed9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=698&q=80" rounded fluid/>
            <h4>Lorem ipsum recipe shit</h4>
          </Link>
        </>
      )) 
      ;
    }
    return(
      <>
        <h2 className="large-recipes-home-title">More Recipes</h2>
        <div className="large-recipes-home-container">
          {this.state.largeRecipes.length > 0 ? largeRecipeEl : null}
        </div>
      </>
    );
  }  
}

export default LargeRecipesHome; 