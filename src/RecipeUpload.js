import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import global_url_variable from './global_url_variable';
import {Container, Form, Button, ListGroup, List} from 'react-bootstrap';
import './RecipeUpload.css';
import 'react-image-crop/dist/ReactCrop.css';
import ImageCrop from './ImageCrop'; 

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
      description: '',
      ingredients: [''],
      amounts: [''],
      blobFile: null,
      originalFileName: null,
      newImages: [],
      numImageFields: 1,
      imageFields: []
    }
    //STOP HERE: Add ingredients and amounts to respective new table in database 
    this.handleClick = this.handleClick.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
    this.handleImageCrop = this.handleImageCrop.bind(this);
    this.addImageField = this.addImageField.bind(this);
    this.removeImageField = this.removeImageField.bind(this);
  }
  handleClick(){
    axios.get(urlAuth)
    .then(res => {
      // if (res.data === ''){
        //   alert("You're not logged in. You must be logged in to upload!")
        //   return;
      // }
      const {item, cook, description, img, ingredients, amounts, newImages} = this.state;

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
      .then(
        axios.post(urlFileUpload, formData)
        .then(res => {
          console.log(res);
        })
      )
        //STOP HERE: Moved axios.post for file to  bottom, because want to make sure recipe gets uploaded first. Maybe this would cause the temp path to save properly in express? Check so that image upload still works correctly.
    })
    .catch(error => { 
      alert("I'm sorry. There was an error with the server. Try refreshing the page, and logging in again.")
      console.log(error) 
    })
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
  handleImageCrop(blobFile, index){
    console.log('index',index)
    /*
    const newImage = new File([blobFile], blobFile.name, {type: blobFile.type});
    let formData = new FormData();
    formData.append("imageFile", newImage, newImage.name)
    this.setState({formData: [formData]});
    */
    // ====================================

    const newImage = new File([blobFile], blobFile.name, {type: blobFile.type});
    console.log('blobfile worked')
    const newImages = [...this.state.newImages];
    newImages[index] = newImage;
    
    this.setState({newImages});
  }
  addImageField(){
    let {numImageFields} = this.state;
    numImageFields++;
    this.setState({numImageFields});

    const imageFields = [...this.state.imageFields, numImageFields];
    this.setState({imageFields}, ()=>{console.log(this.state.imageFields)})
  }
  removeImageField(ind){
    console.log('remove #:', ind)
    let {numImageFields} = this.state;
    this.setState({numImageFields});

    const imageFields = [...this.state.imageFields]
    imageFields.splice(ind, 1)
    this.setState({imageFields})
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
    //Problem is that ID is being assigned. When #2 is deleted, #3 does not become #2. We want to store all ImageCrop in an array, so their data can be saved in the array, and their position can be determined based on their position in the array.
    // const imageFields = () => {
    //   const arr = [];
    //   for (let i = 0; i < this.state.numImageFields; i++) {
    //     arr.push(
    //       <ListGroup.Item key={i} variant="primary">
    //         <ImageCrop id_num={i} onImageCrop={this.handleImageCrop}/>
    //         <Button variant="danger" onClick={() => {this.removeImageField(i)}}>Remove Image #{i+1}</Button>
    //       </ListGroup.Item>
    //     )
    //   }
    //   return arr;
    // }
    //Inside ImageCrop, it's still rendering the data to the image with the id "i". We need to change this inside of ImageCrop? 
    //Give each ImageCrop a unique Id upon creation. Don't base it off of the position in the array. 
    const imageFields = this.state.imageFields.map((idNum, ind) =>  (
      <ListGroup.Item key={idNum} variant="primary">
        <ImageCrop id_num={idNum} display_nu={ind + 1} onImageCrop={this.handleImageCrop}/>
        <Button variant="danger" onClick={() => {this.removeImageField(ind)}}>Remove Image #{ind + 1}</Button>
      </ListGroup.Item>
    ));


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
            <h2>Ingredients</h2>
            <Button className="ingredient-button-add" onClick={this.addIngredient} variant="success">Add Ingredient</Button>
            <ListGroup>
              {ingredientFields}
            </ListGroup>
            <h2>Upload Images</h2>
            <ListGroup>
              {imageFields}
            </ListGroup>
            <Button className="add-image-button" variant="success" onClick={this.addImageField}>Add Image</Button>
          </Form>
          <Button variant="primary" onClick={this.handleClick}>Post Your New Recipe!</Button>
        </Container>
      </> 
    ) 
  } 
}

export default RecipeUpload;
