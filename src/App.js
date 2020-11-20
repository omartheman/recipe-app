import './App.css';
import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: [],
    }
  }
  componentDidMount() { 
    axios.get("https://brittanyjewellneal.com/recipeapp_server/") 
    .then(response => { 
      console.log(response.data[0]);
      this.setState({recipes: response.data}); 
    }) 
    .catch(error => { 
      console.log(error) 
    }) 
  } 
 
  render() { 
    const {recipes} = this.state;
    let item, cook, date, img, description;
    if (recipes.length > 0) {
      item = recipes[0].item
      cook = recipes[0].cook
      date = recipes[0].date
      img = recipes[0].img
      description = recipes[0].description
    }
    return ( 
      <div> 
        <h2>Recipe App</h2>
        <span>Page Content Goes Here</span> 
        <h3>Recipe 1</h3>
        <div>Item: {item}</div>
        <div>Cook: {cook}</div>
        <div>Date: {date}</div>
        <div>Picture: <img src={img} style={{width:'200px'}}/></div>
        <div>Description: {description}</div>
      </div> 
    ) 
  } 
}

export default App;
