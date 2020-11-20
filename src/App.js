import './App.css';
import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {
  componentDidMount() { 
    axios.get("http://localhost:4000/") 
    .then(response => { 
      console.log('heyder, not waiting')
      console.log(response.data) 
    }) 
    .catch(error => { 
      console.log(error) 
    }) 
  } 
 
  render() { 
    return ( 
      <div> 
        <span>Page Content Goes Here</span> 
      </div> 
    ) 
  } 
}

export default App;
