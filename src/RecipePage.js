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
const urlInstructions = `${url}get-instructions`

const Recipe = (props) => {
  const [recipeId] = useState(Number(props.match.params.recipeId));
  const [recipeName, setRecipeName] = useState(null);
  const [cook, setCook] = useState(null); 
  const [description, setDescription] = useState(null);
  const [ingredients, setIngredients] = useState(null);
  const [images, setImages] = useState(null);
  const [instructions, setInstructions] = useState(null);
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
        setIngredients(res.data.map((x, i) => (
          <ListGroup.Item key={i}>
            <Row>
              <Col>{x.ingredient}</Col>
              <Col>{x.amount}</Col>
            </Row>
          </ListGroup.Item>
        )));
      })
      //RETRIEVE INSTRUCTIONS
      axios.post(urlInstructions, {
        id: recipeId,
        item: itemLow
      })
      .then(res => {
        console.log(res.data);
        setInstructions(res.data.map((x, i) => (
          <ListGroup.Item key={i}>
            {x.instruction}
          </ListGroup.Item>
        )));
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
        <h2>Recipe Details</h2>
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
        <h2>Instructions</h2>
        <ListGroup>
          {instructions}
        </ListGroup>
      </Container>
    </>
  );
}

export default Recipe;