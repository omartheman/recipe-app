import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import global_url_variable from './global_url_variable';
import { Container, ListGroup, Row, Col } from 'react-bootstrap';
import './RecipePage.css';

const url = global_url_variable;
const urlRecipe = `${url}getrecipe`;
const urlIngredients = `${url}getingredients`;
const urlImages = `${url}get-images`

const Recipe = (props) => {
  const [recipeId] = useState(Number(props.match.params.recipeId));
  const [recipeName, setRecipeName] = useState(null);
  const [cook, setCook] = useState(null); 
  const [description, setDescription] = useState(null);
  const [recipeImage, setRecipeImage] = useState(null);
  const [ingredients, setIngredients] = useState(null);
  const [images, setImages] = useState(null);
  //we need to retrieve data about specific recipe
  useEffect(() => {
    axios.post(urlRecipe, {
      id: recipeId
    })
    .then(res => {
      console.log('res',res.data);
      setRecipeName(res.data[0].item);
      setCook(res.data[0].cook);
      setDescription(res.data[0].description);
      setRecipeImage(res.data[0].img);
      return res;
    })
    .then(res => {
      const itemLow = res.data[0].item.toLowerCase();
      //RETRIEVE INGREDIENTS
      axios.post(urlIngredients, {
        id: recipeId,
        item: itemLow
      })
      .then(res => {
        console.log(res.data);
        // setImages(res.data);
      })

      //RETRIEVE IMAGES
      axios.post(urlImages, {
        id: recipeId,
        item: itemLow
      })
      .then(res => {
        console.log(res.data);
        setImages(res.data.map((x, index) => {
          return(
            <img key={index} src={`https://brittanyjewellneal.com/uploaded_files/${x.imageName}`} alt={x.imageName}/>
          )
        }));
      })
    })

    
  }, [recipeId]);
  return(
    <>
      <Navbar 
        loggedInUser={props.loggedInUser}
        onLogout={props.onLogout}
      />
      <Container>
        <h1>Recipe: {recipeName}</h1>
        {images}
        <ListGroup>
          <ListGroup.Item>
            Cook: {cook}
          </ListGroup.Item>
          <ListGroup.Item>
            Description: {description}
          </ListGroup.Item>
        </ListGroup>
        <h2>Ingredients</h2>
        <ListGroup>
          {ingredients}
        </ListGroup>
      </Container>
    </>
  );
}

export default Recipe;