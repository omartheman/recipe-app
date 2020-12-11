import './App.css';
import React, {Component} from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import global_url_variable from './global_url_variable';
import {Container, Form, Button, ListGroup} from 'react-bootstrap';
import './RecipeUpload.css';

const url = global_url_variable;
const urlRecipeUpload = `${url}recipe-upload`;
const urlAuth = `${url}auth`;
const urlFileUpload = `${url}image-upload`;
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
      imageFile: null,
      description: '',
      ingredients: [''],
      amounts: ['']
    }
    //STOP HERE: Add ingredients and amounts to respective new table in database 
    this.handleClick = this.handleClick.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
  }
  handleClick(){
    axios.get(urlAuth)
    .then(res => {
      // if (res.data === ''){
      //   alert("You're not logged in. You must be logged in to upload!")
      //   return;
      // }
      const {item, cook, description, img, imageFile, ingredients, amounts} = this.state;
      const formData = new FormData();
      formData.append(
        "imageFile",
        imageFile,
        imageFile.name
      );
      axios.post(urlFileUpload, formData)
      .then(res => {
        console.log(res);
      });
      
      axios.post(urlRecipeUpload,     
        {
          item: item, 
          cook: cook, 
          img: img,
          description: description,
          ingredients: ingredients,
          amounts: amounts
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
    })
    .catch(error => { 
      alert("I'm sorry. There was an error with the server. Try refreshing the page, and logging in again.")
      console.log(error) 
    })
  }
  fileData(){
    const {imageFile} = this.state;
    if (imageFile) {
      return (
        <>
          <h2>File Details</h2>
          <p>File Name: {imageFile.name}</p>
        </>
      )
    }
  }
  addIngredient(){
    const {ingredients, amounts} = this.state;
    //create new ingredient with unique key?
    //Ingredient doesn't need key, it can just use index of array. 
    this.setState({
      ingredients: [...ingredients, ''],
      amounts: [...amounts, '']
    }, () => {console.log(this.state)});
  }
  removeIngredient(ingNum){
    console.log(ingNum)
    let {ingredients, amounts} = this.state;
    //remove respective index from each.
    const ingredientsContent = [...ingredients];
    const amountsContent = [...amounts]; 
    ingredientsContent.splice(ingNum, 1);
    amountsContent.splice(ingNum, 1);
    ingredients = ingredientsContent;
    amounts = amountsContent;
    this.setState({ingredients, amounts})
  }
  
  render() { 
    let {ingredients} = this.state;
    const {loggedInUser, onLogout} = this.props;
    const ingredientFields = ingredients.map((ing, index) => {
      return(
          <ListGroup.Item variant="info" key={index} className="ingredient-amount-container">
            <div>
              <Form.Label>Ingredient #{index + 1}</Form.Label>
              <Form.Control  
                type="text" 
                value={this.state.ingredients[index]}
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
                value={this.state.amounts[index]}
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
            <Button 
              className="ingredient-button-remove" 
              variant="danger"
              onClick={() => {this.removeIngredient(index)}}
            >
              X
            </Button>
          </ListGroup.Item>
      );
    })

    return ( 
      <> 
        <Navbar 
          loggedInUser={loggedInUser}
          onLogout={onLogout}
        />
        <Container>
          <h1>Recipe Upload</h1>
          <h2>Recipe Information</h2>
          <Form autoComplete="off">
            <Form.Label>Name of Recipe</Form.Label>
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
              as="textarea"
              rows={3}
              type="text" 
              id="description"
              placeholder="Tell us a little about your awesome recipe."
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
            <Form.Label>Upload Image</Form.Label>
            <Form.Control  
              type="file" 
              id="imageFile"
              name="imageFile"
              onChange={(e) => {
                this.setState({[e.target.id]: e.target.files[0]}, ()=>{console.log(this.state.imageFile)})
              }}
            />
            {this.fileData()}


            <h2>Ingredients</h2>
            <Button className="ingredient-button-add" onClick={this.addIngredient}>Add Ingredient</Button>
            <ListGroup>
              {ingredientFields}
            </ListGroup>
          </Form>
          <Button variant="success" onClick={this.handleClick}>Post Your New Recipe!</Button>
        </Container>
      </> 
    ) 
  } 
}

export default RecipeUpload;
