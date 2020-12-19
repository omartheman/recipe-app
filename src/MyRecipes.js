import React, { useState, useEffect } from 'react';
import Navbar from './NavbarContainer';
import { Container, ListGroup, Row, Col, Spinner } from 'react-bootstrap';
import axios from 'axios';
import global_url_variable from './global_url_variable';
import './MyRecipes.css';
import { Link } from 'react-router-dom';

const url = global_url_variable;
const urlMyRecipes = `${url}myrecipes`;

axios.defaults.headers.common['Cache-Control'] = 'no-cache';

const MyRecipes = (props) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    axios.get(urlMyRecipes)
    .then(res => {
      console.log(res.data);
      setRecipes([...res.data]);
    });
  }, []);
  let recipeListLeft;
  let recipeListRight;
  if (recipes.length > 0) {
    recipeListLeft = recipes.map((x, ind) => {
      if (ind % 2 === 0) {
        return(
          <ListGroup.Item className="recipe-list-group-item" key={ind} variant="primary" as={Link} to={`/recipeapp/recipe/${x.id}`}>{x.item}</ListGroup.Item>
        )
      } else {return null}
    })
    recipeListRight = recipes.map((x, ind) => {
      if (ind % 2 !== 0) {
        return(
          <ListGroup.Item className="recipe-list-group-item" key={ind} variant="primary" as={Link} to={`/recipeapp/recipe/${x.id}`}>{x.item}</ListGroup.Item>
        )
      } else {return null}
    })
  }
  return(
    <>
      <Container>
        <h1>My Recipes</h1>
        {recipes.length > 0 ? 
        <Row>
          <Col>
            <ListGroup className="recipe-list-group">
              {recipeListLeft}
            </ListGroup>
          </Col>
          <Col>
            <ListGroup className="recipe-list-group-right">
              {recipeListRight}
            </ListGroup>
          </Col>
        </Row>:
        <Spinner variant="success" animation="border" role="status" id="spinner-centered" className="spinner-home-carousel"><span className="sr-only">Loading...</span></Spinner>
        }
      </Container>
    </>
  );
}

export default MyRecipes; 