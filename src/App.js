import './App.css';
import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {
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
    const {item, cook, description, img} = this.state;
    this.setState({
      item, cook, description, img})
    axios.post('http://localhost:4000/recipeapp_server/post',     
      {
        item: item, 
        cook: cook, 
        img: img,
        description: description
      }
    )
    .then(response => {console.log('axios response',response)})
    .then(this.setState({item, cook, description, img}), ()=>{console.log('new state is ', this.state)})
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
  handleFormChange(){

  }
  render() { 
    console.log('state',this.state)
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
      <div> 
        <h2>Recipe App</h2>
        <form>
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
      </div> 
    ) 
  } 
}

export default App;
