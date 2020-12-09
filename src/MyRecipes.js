import React from 'react';
import Navbar from './Navbar';
import {Container, ListGroup, Row, Col} from 'react-bootstrap';
import axios from 'axios';
import global_url_variable from './global_url_variable';
import './MyRecipes.css';

const url = global_url_variable;
const urlMyRecipes = `${url}myrecipes`;

axios.defaults.headers.common['Cache-Control'] = 'no-cache';

class MyRecipes extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: []
    }
  }
  componentDidMount() { 
    axios.get(urlMyRecipes)
    .then(res => {
      console.log(res.data);
      this.setState({recipes: [...res.data]})
    });
  }
  //set state with values from axios res.
  render(){
    const {recipes} = this.state;
    let recipeListLeft;
    let recipeListRight;
    if (recipes.length > 0) {
      recipeListLeft = recipes.map((x, ind) => {
        if (ind % 2 === 0) {
          return(
            <ListGroup.Item key={ind} variant="primary">{x.item}</ListGroup.Item>
          )
        } else {return null}
      })
      recipeListRight = recipes.map((x, ind) => {
        if (ind % 2 !== 0) {
          return(
            <ListGroup.Item key={ind} variant="primary">{x.item}</ListGroup.Item>
          )
        } else {return null}
      })
    }
    return(
      <>
        <Navbar 
          loggedInUser={this.props.loggedInUser}
          onLogout={this.props.onLogout}
        />
        <Container>
          <h1>My Recipes</h1>
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
        </Container>
      </>
    );
  }
}

export default MyRecipes; 