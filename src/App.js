import './App.css';
import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: [],
    }
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() { 
    axios.get("http://localhost:4000/recipeapp_server/") 
    .then(response => { 
      console.log(response.data[0]);
      this.setState({recipes: response.data}); 
    }) 
    .catch(error => { 
      console.log(error) 
    }) 
  }
  handleClick(){
    axios.post('http://localhost:4000/recipeapp_server/post',     
      {
        item: 'Cheeseburger', 
        cook: 'Fred', 
        img: 'https://images.unsplash.com/photo-1603508102981-f44b20e0c124?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        description: 'A really tasty cheeseburger'
      }
    )
    .then(response => {console.log('axios response',response)})
    .then(
      axios.get("http://localhost:4000/recipeapp_server/")
      .then(response => { 
        console.log('response from onclick', response.data[0]);
        this.setState({recipes: response.data}); 
      })
      .catch(error => { 
        console.log(error) 
      })
    )
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
        <button onClick={this.handleClick}>Post</button>
        <span>Page Content Goes Here</span> 
        <h3>Recipe 1</h3>
        <div>Item: {item}</div>
        <div>Cook: {cook}</div>
        <div>Date: {date}</div>
        <div>Picture: <img alt='' src={img} style={{width:'200px'}}/></div>
        <div>Description: {description}</div>
      </div> 
    ) 
  } 
}

export default App;
