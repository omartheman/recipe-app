import './App.css';
import React, {Component} from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import global_url_variable from './global_url_variable';

const url = global_url_variable;
axios.defaults.headers.common['Cache-Control'] = 'no-cache';

class RecipeUpload extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: [],
      item: '',
      cook: '',
      img: '',
      description: ''
    }
    this.handleClick = this.handleClick.bind(this);
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
    axios.post(url,     
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
  render() { 
    const {recipes} = this.state;
    let {item, cook, date, img, description} = this.state;
    if (recipes.length > 0) {

      item = recipes[0].item
      cook = recipes[0].cook
      date = recipes[0].date
      img = recipes[0].img
      description = recipes[0].description
    }
    return ( 
      <> 
        <Navbar 
          loggedInUser={this.props.loggedInUser}
        />
        <h2>Recipe App</h2>
        <form autoComplete="off">
          <label>Item</label>
          <input 
            type="text" 
            id="item"
            onChange={(e) => {
              this.setState({[e.target.id]: e.target.value})
            }} 
          /><br/>
          <label>Cook</label>
          <input 
            type="text" 
            id="cook"
            onChange={(e) => {
              this.setState({[e.target.id]: e.target.value})
            }} 
          /><br/>
          <label>description</label>
          <input 
            type="text" 
            id="description"
            onChange={(e) => {
              this.setState({[e.target.id]: e.target.value})
            }} 
          /><br/>
          <label>img</label>
          <input 
            type="text" 
            id="img"
            onChange={(e) => {
              this.setState({[e.target.id]: e.target.value})
            }} 
          /><br/>
        </form>
        <button onClick={this.handleClick}>Post</button>
        <span>Page Content Goes Here</span> 
        <h3>Recipe 1</h3>
        <div>Item: {item}</div>
        <div>Cook: {cook}</div>
        <div>Date: {date}</div>
        <div>Picture: <img alt='' src={img} style={{width:'200px'}}/></div>
        <div>Description: {description}</div>
      </> 
    ) 
  } 
}

export default RecipeUpload;
