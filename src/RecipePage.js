import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import global_url_variable from './global_url_variable';
import { Container, ListGroup, Row, Col } from 'react-bootstrap';

const url = global_url_variable;
const urlRecipe = `${url}getrecipe`;
const urlIngredients = `${url}getingredients`;

const Recipe = (props) => {
  const [recipeId] = useState(Number(props.match.params.recipeId));
  const [recipeName, setRecipeName] = useState(null);
  const [cook, setCook] = useState(null); 
  const [description, setDescription] = useState(null);
  const [recipeImage, setRecipeImage] = useState(null);
  const [ingredients, setIngredients] = useState(null);
  //we need to retrieve data about specific recipe
  useEffect(() => {
    axios.post(urlRecipe, {
      id: recipeId
    })
    .then(res => {
      console.log('res',res.data[0].item);
      setRecipeName(res.data[0].item);
      setCook(res.data[0].cook);
      setDescription(res.data[0].description);
      setRecipeImage(res.data[0].img);
      return res;
    })
    .then(res => {
      //change item name to lowercase, create db item name. 
      const itemLow = res.data[0].item.toLowerCase();
      axios.post(urlIngredients, {
        id: recipeId,
        item: itemLow
      })
      .then(res => {
        console.log(res.data);
        setIngredients(res.data.map(x => {
          return(
            <ListGroup.Item>
              <Row>
                <Col>
                  {x.ingredient}
                </Col>
                <Col>
                  {x.amount}
                </Col>
              </Row>
            </ListGroup.Item>
          )
        }));
      })
    });
  }, [recipeId]);


  return(
    <>
      <Navbar 
        loggedInUser={props.loggedInUser}
        onLogout={props.onLogout}
      />
      <Container>
        <h1>Recipe: {recipeName}</h1>
        <img src={recipeImage} alt={description}></img>
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