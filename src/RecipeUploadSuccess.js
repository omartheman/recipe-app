import Navbar from './NavbarContainer';
import { useState, useEffect } from 'react'; 
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'react-awesome-button/dist/styles.css';
import './RecipeUploadSuccess.css'
import { Link, Redirect } from 'react-router-dom';

function RecipeUploadSuccess () {
  
  const [starCount, setStarCount] = useState(0);
  useEffect(()=>{console.log('stars', stars)})
  useEffect(()=>{
    if (starCount < 100) {
      console.log('starcount is', starCount)
      console.log('setting star count')
      setStarCount(prev => prev + 1);
      newSVG();
    }
  })
  const [redirect, setRedirect] = useState(null);
  const [stars, setStars] = useState([]);
  const handleRedirect = (id) => {
    console.log('handle work')
    switch (id) {
      case 'new-recipe':
        console.log('heyder')
        setRedirect(<Redirect as={Link} to={`/recipeapp/${id}`} />);
      break;
      case 'myrecipes':
        console.log('whoah')
        setRedirect(<Redirect to={`/recipeapp/${id}`} />);
      break;
      default:
        return null;
    }
  }

  let star_fall_distance;
  let idClicked;
  let new_star_left;
  let star_num;
  let star_delay;
  let star_color;
  let animation_number;
  let star_color_random_id;
  let starSVG;
  
  
  function newSVG(){
    new_star_left = Math.random()*97;
    animation_number = Math.ceil(Math.random()*4);
    star_delay = Math.random();
    star_color_random_id = Math.ceil(Math.random()*2);
    
      console.log('Run createStar, starCount: ', starCount)
      createStar(new_star_left, animation_number, star_fall_distance, star_delay);
  };
  const createStar = (new_star_left, animation_number, star_fall_distance, star_delay) => {
    console.log('new star left', new_star_left)
    console.log('star delay', star_delay)
    function starVanish(i, star_delay){
      setTimeout(function(){
        return('hidden')
      }, star_delay);
    };
    let i = 1;
    
    console.log('create star')
    setTimeout (() => {
      let star_color;
      let star_color_random_id;
      
      star_color_random_id = Math.ceil(Math.random()*2);
      star_color = `rgb(255, ${Math.floor(Math.random()*255)}, 0)`;
      
      if (star_color_random_id === 1){
        star_color = `rgb(255, ${Math.round(Math.random()*255)}, 0)`;  
      } else {
        star_color = `rgb(255, 0, ${Math.round(Math.random()*255)})`;
      }
      console.log(i);
      // i++
      // if (i < 100){
        //   createStar();
        // }
      const newStar = 
      <div 
        className="star-fall-animation"
        style={{
          left: `${new_star_left}%`,
          animationDelay: `${star_delay}s`
        }}
      >
        <svg 
        className={`timer__star timer__star__${i} timer__star--rotate star-fall-animation ${starVanish(i, star_delay)}`} 
        style={{
          animation: `star_rotate_${animation_number}} 20s forwards`, 
        }}
        width="30" height="30" version="1.1" viewBox="0 0 7.9375 7.9375" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(0 -289.06)">
          <path d="m6.8304 296.28c0.029171-0.0264-2.5116-0.97159-2.4724-0.97584 0.039143-4e-3 -2.2397 1.4639-2.2055 1.4835 0.034165 0.0196 0.14792-2.6889 0.16406-2.653 0.016136 0.0359-2.0844-1.6777-2.0924-1.6392-0.008056 0.0385 2.603-0.69022 2.5738-0.66378-0.029171 0.0265 0.95147-2.5008 0.91233-2.4966-0.039143 4e-3 1.4608 2.2623 1.4266 2.2427-0.034165-0.0196 2.6724 0.13212 2.6563 0.0962-0.016136-0.0359-1.7002 2.0884-1.6921 2.0499 0.00806-0.0385 0.70018 2.5824 0.72935 2.556z" fill={star_color} stroke="#000" stroke-width=".16008" />
          </g>
        </svg>
      </div>;
      setStars(prev => 
        [...prev, newStar]
        )
        
        //get element by class name .timer__star__${i}
        
        /*
        $(`.timer__star__${i}`.animate({
          top: 
          // top: `${star_fall_distance}`
        }, 7000);
        */
       //  starVanish(i, star_delay); 
      }, 300)
    }
    
    return(
      <>
      {redirect}
      <Container>
        <h1>Success!</h1>
        <h2>Congratulations, your awesome new recipe was uploaded!</h2>
        {stars}
        <Row className="success-redirect-buttons">
          <Col>
            <Button onClick={() => {handleRedirect('new-recipe')}}>View New Recipe</Button> 
          </Col>
          <Col>
            <Button onClick={() => {handleRedirect('myrecipes')}}>Go to My Recipes</Button> 
          </Col>
        </Row>
      </Container>
      
    </>
  );
}

export default RecipeUploadSuccess;