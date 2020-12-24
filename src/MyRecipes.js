import React, { useState, useEffect } from 'react';
import { Container, ListGroup, Row, Col, Spinner } from 'react-bootstrap';
import axios from 'axios';
import global_url_variable from './global_url_variable';
import './MyRecipes.scss';
import { Link } from 'react-router-dom';
import './App.css';

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
          <ListGroup.Item           
            className="recipe-list-group-item fade-in" 
            key={ind} 
            variant="secondary" 
            as={Link} 
            to={`/recipeapp/recipe/${x.id}`}
          >
            {x.item}
          </ListGroup.Item>
        )
      } else {return null}
    })
    recipeListRight = recipes.map((x, ind) => {
      if (ind % 2 !== 0) {
        return(
          <ListGroup.Item className="recipe-list-group-item fade-in" key={ind} variant="secondary" as={Link} to={`/recipeapp/recipe/${x.id}`}>{x.item}</ListGroup.Item>
        )
      } else {return null}
    })
  }
  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  };
  const size = useWindowSize();
  
  const recipeListMobile = recipes.map((x, ind) => (
    <ListGroup.Item 
      className="recipe-list-group-item fade-in"  
      key={ind} 
      variant="secondary" 
      as={Link} 
      to={`/recipeapp/recipe/${x.id}`}
    >
      {x.item}
    </ListGroup.Item>
  )); //End of recipeListMobile variable definition
  return(
    <>
      <Container className="all-recipes-container">
        <h1>My Recipes</h1>
        {(recipes.length > 0 && size.width > 610) &&
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
        </Row>
        }
        {(recipes.length > 0 && size.width <= 610) &&
          <ListGroup>
            {recipeListMobile}
          </ListGroup>
        }
        {recipes.length === 0 &&
          <Spinner variant="success" animation="border" role="status" id="spinner-centered" className="spinner-home-carousel"><span className="sr-only">Loading...</span></Spinner>
        }
      </Container>
    </>
  );
}

export default MyRecipes; 