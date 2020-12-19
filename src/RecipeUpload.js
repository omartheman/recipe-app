import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './NavbarContainer';
import global_url_variable from './global_url_variable';
import { Container, Form, Button, ListGroup } from 'react-bootstrap';
import './RecipeUpload.css';
import 'react-image-crop/dist/ReactCrop.css';
import ImageCrop from './ImageCrop'; 
import { Redirect } from 'react-router-dom';

const url = global_url_variable;
const urlRecipeUpload = `${url}recipe-upload`;
const urlAuth = `${url}auth`;
const urlFileUpload = `${url}image-upload`;
axios.defaults.headers.common['Cache-Control'] = 'no-cache';

class RecipeUpload extends Component {
  constructor(props){
    super(props);
    //Add ingredients form 
    this.state = {
      recipes: [],
      item: '',
      cook: '',
      description: '',
      ingredients: [''],
      amounts: [''],
      blobFile: null,
      originalFileName: null,
      newImages: [],
      numImageFields: 1,
      imageFields: [0],
      instructions: [''],
      redirect: false
    }
    this.handlePostRecipe = this.handlePostRecipe.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
    this.handleImageCrop = this.handleImageCrop.bind(this);
    this.addImageField = this.addImageField.bind(this);
    this.removeImageField = this.removeImageField.bind(this);
    this.addInstruction = this.addInstruction.bind(this);
  }
  handlePostRecipe(){
    axios.get(urlAuth)
    .then(res => {
      // if (res.data === ''){
        //   alert("You're not logged in. You must be logged in to upload!")
        //   return;
      // }
      const {item, cook, description, ingredients, amounts, newImages, instructions} = this.state;

      console.log('newimages', newImages)
      let formData = new FormData();
      newImages.map(newImage => {
        console.log(newImage)
        formData.append("imageFile", newImage, newImage.name);
      })

      console.log('formData', formData);
      console.log('blob', this.state.blobFile)
      
      axios.post(urlRecipeUpload,     
        {
          item: item, 
          cook: cook, 
          description: description,
          ingredients: ingredients,
          amounts: amounts,
          instructions: instructions
        }
      )
      .then(response => {console.log('axios response',response)})
      .then(this.setState({item, cook, description}))
      .then(
        axios.get(url)
        .then(response => { 
          this.setState({recipes: response.data}); 
        })
        .catch(error => { 
          console.log(error) 
        })
      )
      .then(
        axios.post(urlFileUpload, formData)
        .then(res => {
          console.log(res);
        })
      )
      .then(this.setState({redirect: true}))
      //Add reroute here. 
    })
    .catch(error => { 
      alert("I'm sorry. There was an error with the server. Try refreshing the page, and logging in again.")
      console.log(error) 
    })
  }
  addInstruction(){
    const {instructions} = this.state;
    this.setState({instructions: [...instructions, '']});
  }
  removeInstruction(index){
    const instructions = [...this.state.instructions];
    instructions.splice(index, 1);
    this.setState({instructions});
  }
  addIngredient(){
    const {ingredients, amounts} = this.state;
    this.setState({ingredients: [...ingredients, ''], amounts: [...amounts, '']});
  }
  removeIngredient(ingNum){
    const ingredients = [...this.state.ingredients];
    const amounts = [...this.state.amounts]; 
    ingredients.splice(ingNum, 1);
    amounts.splice(ingNum, 1);
    this.setState({ingredients, amounts});
  }
  handleImageCrop(blobFile, index){
    const newImage = new File([blobFile], blobFile.name, {type: blobFile.type});
    const newImages = [...this.state.newImages];
    newImages[index] = newImage;
    this.setState({newImages}, ()=>{console.log('newImages in handleImageCrop',newImages, [...newImages])});
  }
  addImageField(){
    let {numImageFields} = this.state;
    const imageFields = [...this.state.imageFields, numImageFields];
    numImageFields++;
    this.setState({numImageFields, imageFields}, ()=>{console.log(this.state.imageFields)})
  }
  removeImageField(ind){
    const imageFields = [...this.state.imageFields];
    imageFields.splice(ind, 1);
    const newImages = [...this.state.newImages];
    newImages.splice(ind, 1);
    this.setState({imageFields, newImages}, ()=>{console.log('updated newImages',this.state.newImages)})
  }
  render() { 
    let {ingredients, instructions} = this.state;
    const {redirect} = this.state; 
    const instructionFields = instructions.map((inst, index) => {
      return(
          <ListGroup.Item variant="info" key={index}>
              <Button 
                className="remove-step-button button-remove"
                variant="danger"
                onClick={() => {this.removeInstruction(index)}}
              >
                X
              </Button>
              <Form.Label><h3>Step {index + 1}:</h3></Form.Label>
              <Form.Control  
                as="textarea"
                placeholder="Let's hear some instructions! 🌯"
                rows={3}
                type="text" 
                value={this.state.instructions[index]}   
                id_num={index}
                onChange={(e) => {
                  const num = Number(e.target.attributes.getNamedItem('id_num').value);
                  let instructions = [...this.state.instructions];
                  instructions[num] = e.target.value;
                  this.setState({instructions}, ()=>{console.log('inst',this.state.instructions)})
                }}
              />
          </ListGroup.Item>
      );
    });
    const ingredientFields = ingredients.map((ing, index) => {
      return(
          <ListGroup.Item variant="info" key={index} className="ingredient-amount-container">
            <div>
              <Form.Label>Ingredient #{index + 1}</Form.Label>
              <Form.Control
                type="text" 
                placeholder="Inquiring minds want to know. 🍅"
                value={this.state.ingredients[index]}   
                ingredientnumber={index}
                onChange={(e) => {
                  const ingNum = Number(e.target.attributes.getNamedItem('ingredientnumber').value);
                  let ingredients = [...this.state.ingredients];
                  ingredients[ingNum] = e.target.value;
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
              className="button-remove" 
              variant="danger"
              onClick={() => {this.removeIngredient(index)}}
            >
              X
            </Button>
          </ListGroup.Item>
      );
    })
    const imageFields = this.state.imageFields.map((idNum, ind) =>  (
      <ListGroup.Item key={idNum} variant="primary">
        { this.state.imageFields.length > 1 && 
          <Button style={{float:'right'}} variant="danger" onClick={() => {this.removeImageField(ind)}}>Remove Image #{ind + 1}</Button>
        }
        <ImageCrop id_num={idNum} index_num={ind} onImageCrop={this.handleImageCrop}/>
      </ListGroup.Item>
    ));

    return ( 
      <> 
        {redirect ? <Redirect to="/recipeapp/recipe-upload-success" /> : null}
        <Container>
          <h1>Recipe Upload</h1>
          <Form autoComplete="off" className="recipe-upload-form">
            <div className="upload-section">
              <h2 id="recipe-info-heading">Recipe Information</h2>
              <Form.Label>Name of Recipe</Form.Label>
              <Form.Control 
                placeholder="What do you call this masterpeice? 🥘"
                type="text" 
                id="item"
                onChange={(e) => {
                  this.setState({[e.target.id]: e.target.value}, ()=>{console.log(this.state)})
                }}
              />
              <Form.Label>Cook</Form.Label>
              <Form.Control  
                placeholder="Who created this recipe?"
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
                placeholder="Tell us a little about your awesome recipe. 🥗"
                onChange={(e) => {
                  this.setState({[e.target.id]: e.target.value})
                }} 
              />
              
              <div className="upload-section">
                <h2>Ingredients</h2>
                <Button className="button-add" onClick={this.addIngredient} variant="success">Add Ingredient</Button>
                <ListGroup>
                  {ingredientFields}
                </ListGroup>
              </div>
            </div>

            <div className="upload-section">
              <h2>Steps</h2>
              <Button className="button-add" onClick={this.addInstruction} variant="success">Add Step</Button>
              <ListGroup>
                {instructionFields}
              </ListGroup>
            </div>

            <div className="upload-section">
              <h2 className="recipe-image-uploads-heading">Upload Images</h2>
              <ListGroup>
                {imageFields}
              </ListGroup>
              <Button className="button-add-image button-add" variant="success" onClick={this.addImageField}>Add Image</Button>
            </div>

          </Form>
          <Button variant="primary" className="post-recipe-button" onClick={this.handlePostRecipe}>Post Your New Recipe!</Button>
        </Container>
      </> 
    ) 
  } 
}

export default RecipeUpload;
