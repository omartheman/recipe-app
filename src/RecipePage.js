import React from 'react';
import Navbar from './Navbar';

const Recipe = (props) => {
  console.log(props);
  console.log('match',props.match)
  console.log('location',props.location)
  return(
    <>
      <Navbar 
        loggedInUser={props.loggedInUser}
        onLogout={props.onLogout}
      />
      Recipe Page
    </>
  );
}

export default Recipe;