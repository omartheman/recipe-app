import './App.css';
import React, {Component} from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import global_url_variable from './global_url_variable';
import {Container, Form, Button} from 'react-bootstrap';
import './RecipeUpload.css';

const url = global_url_variable;
const urlRecipeUpload = `${url}recipe-upload`;
axios.defaults.headers.common['Cache-Control'] = 'no-cache';

/*
-Create a connection between the logged in user and recipeupload. 
-Use loggedInUser from App state to determie where to post data from database.
-Create "recipes" table in database. 
*/
class RecipeUpload extends Component {
  constructor(props){
    super(props);
    //Add ingredients form 
    this.state = {
      recipes: [],
      item: '',
      cook: '',
      img: '',
      description: '',
      ingredients: [''],
      amounts: ['']
    }
    // ingredients: [ingredient: 'lorem', amount: 'ipsum']
    this.handleClick = this.handleClick.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
  }
  componentDidMount() { 
    axios.get(url) 
    .then(response => { 
      console.log(response.data[0]);
      this.setState({recipes: response.data}); 
    }) 
    .catch(error => { 
      console.log(error) 
    }) 
  }
  handleClick(){
    const {item, cook, description, img} = this.state;
    this.setState({
      item, cook, description, img})
    axios.post(urlRecipeUpload,     
      {
        item: item, 
        cook: cook, 
        img: img,
        description: description
      }
    )
    .then(response => {console.log('axios response',response)})
    .then(this.setState({item, cook, description, img}))
    .then(
      axios.get(url)
      .then(response => { 
        this.setState({recipes: response.data}); 
      })
      .catch(error => { 
        console.log(error) 
      })
    )
  }
  addIngredient(){
    const {ingredients} = this.state;
    //create new ingredient with unique key?
    //Ingredient doesn't need key, it can just use index of array. 
    this.setState({
      ingredients: [...ingredients, '']
    }, () => {console.log(this.state.ingredients)});
  }
  render() { 
    const {recipes} = this.state;
    let {item, cook, date, img, description, ingredients} = this.state;
    const {loggedInUser, onLogout} = this.props;
    if (recipes.length > 0) {

      item = recipes[0].item
      cook = recipes[0].cook
      date = recipes[0].date
      img = recipes[0].img
      description = recipes[0].description
    }
    //Render a new field for each ingredient. 
    const ingredientFields = ingredients.map((ing, index) => {
      return(
        <div key={index} className="ingredient-amount-container">
          <div>
            <Form.Label>Ingredient #{index + 1}</Form.Label>
            <Form.Control  
              type="text" 
              ingredientnumber={index}
              onChange={(e) => {
                const ingNum = Number(e.target.attributes.getNamedItem('ingredientnumber').value);
                let {ingredients} = this.state;
                const ingredientsContent = [...ingredients];
                ingredientsContent[ingNum] = e.target.value;
                ingredients = ingredientsContent;
                this.setState({ingredients}, ()=>{console.log(this.state.ingredients)})
              }}
            />
          </div>
          
          <div>
            <Form.Label>Amount</Form.Label>
            <Form.Control  
              type="text" 
              amountnumber={index}
              onChange={(e) => {
                const amountNum = Number(e.target.attributes.getNamedItem('amountnumber').value);
                let {amounts} = this.state;
                const amountsContent = [...amounts];
                amountsContent[amountNum] = e.target.value;
                amounts = amountsContent;
                this.setState({amounts}, ()=>{console.log(this.state.amounts)})
              }}
            />
          </div>
        </div>
      );
    })

    return ( 
      <> 
        <Navbar 
          loggedInUser={loggedInUser}
          onLogout={onLogout}
        />
        <Container>
          <h2>Recipe App</h2>
          <Form autoComplete="off">
            <Form.Label>Item</Form.Label>
            <Form.Control 
              type="text" 
              id="item"
              onChange={(e) => {
                this.setState({[e.target.id]: e.target.value}, ()=>{console.log(this.state)})
              }}
            />
            <Form.Label>Cook</Form.Label>
            <Form.Control  
              type="text" 
              id="cook"
              onChange={(e) => {
                this.setState({[e.target.id]: e.target.value})
              }} 
            />
            <Form.Label>Description</Form.Label>
            <Form.Control 
              type="text" 
              id="description"
              onChange={(e) => {
                this.setState({[e.target.id]: e.target.value})
              }} 
            />
            <Form.Label>Image URL</Form.Label>
            <Form.Control  
              type="text" 
              id="img"
              onChange={(e) => {
                this.setState({[e.target.id]: e.target.value})
              }}
            />
            {ingredientFields}
            <Button onClick={this.addIngredient}>Add Ingredient</Button>
          </Form>
          <Button onClick={this.handleClick}>Post</Button>
          <h3>Recipe 1</h3>
          <div>Item: {item}</div>
          <div>Cook: {cook}</div>
          <div>Date: {date}</div>
          <div>Picture: <img alt='' src={img} style={{width:'200px'}}/></div>
          <div>Description: {description}</div>
        </Container>
      </> 
    ) 
  } 
}

export default RecipeUpload;
