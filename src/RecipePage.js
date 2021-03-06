import React, { useState, useEffect } from 'react';
import axios from 'axios';
import global_url_variable from './global_url_variable';
import { Container, ListGroup, Row, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import { SRLWrapper } from 'simple-react-lightbox';
import './RecipePage.scss';
import "react-multi-carousel/lib/styles.css";
import image1 from './images/omar-3-profile.jpg';
import image2 from './images/imageFile_dateVal_1607883271123_boat_on_lake.jpg';
import image3 from './images/imageFile_dateVal_1607883271125_block-game-thumbnail copy.png';
import image4 from './images/imageFile_dateVal_1607883271125_block-game-thumbnail.png';
import image5 from './images/imageFile_dateVal_1607898827213_bootstrap_sample_site copy.png';
import image6 from './images/imageFile_dateVal_1607898827213_bootstrap_sample_site.png';

const url = global_url_variable;
const urlRecipe = `${url}getrecipe`;
const urlIngredients = `${url}getingredients`;
const urlImages = `${url}get-images`;
const urlInstructions = `${url}get-instructions`;
// image1, image2, image3, image4, image5, image6
const arr = [ image1];
const carouselItems = arr.map( (x, i) => (
  <div key={i} className="carousel-img-container">
    <Link to="#" className="carousel-link-home">
      <SRLWrapper>
        <img className="carousel-img" src={x} alt='alt' />
      </SRLWrapper>
    </Link>
  </div>
));

const Recipe = (props) => {
  const [recipeId] = useState(Number(props.match.params.recipeId));
  const [recipeName, setRecipeName] = useState(null);
  const [cook, setCook] = useState(null); 
  const [description, setDescription] = useState(null);
  const [ingredients, setIngredients] = useState(null);
  const [images, setImages] = useState(null);
  const [instructions, setInstructions] = useState(null);
  const [singleImage, setSingleImage] = useState(null);
  //we need to retrieve data about specific recipe
  useEffect(() => {
    console.log('images',images)
    axios.post(urlRecipe, {
      id: recipeId
    })
    .then(res => {
      console.log('res',res.data);
      setRecipeName(res.data[0].item);
      setCook(res.data[0].cook);
      setDescription(res.data[0].description);
      return res;
    })
    .then(res => {
      const itemLow = res.data[0].item.toLowerCase();
      //RETRIEVE INGREDIENTS
      axios.post(urlIngredients, {
        id: recipeId,
        item: itemLow
      })
      .then(res => {
        console.log(res.data);
        setIngredients(res.data.map((x, i) => (
          <ListGroup.Item key={i}>
            <Row>
              <Col>{x.ingredient}</Col>
              <Col>{x.amount}</Col>
            </Row>
          </ListGroup.Item>
        )));
      })
      //RETRIEVE INSTRUCTIONS
      axios.post(urlInstructions, {
        id: recipeId,
        item: itemLow
      })
      .then(res => {
        console.log(res.data);
        setInstructions(res.data.map((x, i) => (
          <ListGroup.Item key={i}>
            { i + 1 }) {x.instruction}
          </ListGroup.Item>
        )));
      })
      //RETRIEVE IMAGES
      axios.post(urlImages, {
        id: recipeId, 
        item: itemLow
      })
      .then(res => {
        console.log(res.data);
        if (url === "http://localhost:4000/recipeapp/recipeapp-server/") {
          if (carouselItems.length > 1) {
            setImages(carouselItems)
          } else {
            console.log('one is the loneliest')
            setImages([
              <div className="recipe-page-single-image-container">
                <Link to="#" className="carousel-link-home">
                  <SRLWrapper>
                    <img className="recipe-page-single-image" src={image1} alt='Recipe image.' />
                  </SRLWrapper>
                </Link>
              </div>
            ]);
          }
          console.log('caritems',carouselItems)
        } else if (res.data.length === 1) {
          setImages(
            <div className="recipe-page-single-image-container">
              <Link to="#" className="carousel-link-home">
                <SRLWrapper>
                  <img className="recipe-page-single-image" src={`https://brittanyjewellneal.com/uploaded_files/${res.data[0].imageName}`} alt='Recipe image.' />
                </SRLWrapper>
              </Link>
            </div>
          );
        } else {
          setImages(res.data.map((x, i) => (
            <div key={i} className="carousel-img-container">
              <Link to="#" className="carousel-link-home">
                <SRLWrapper>
                  <img className="carousel-img" src={`https://brittanyjewellneal.com/uploaded_files/${x.imageName}`} alt='Recipe image.' />
                </SRLWrapper>
              </Link>
            </div>
          )));
        }
      })
    })
  // Following error removed because it causes an infinite loop to add dependencies 'images' and 'recipeId'. Removing the empty array argument also causes an infinite loop.
  // eslint-disable-next-line 
  }, []);
  const carousel = () => {
    if (images && images.length > 1) {
      return(
        <Carousel 
          responsive={responsive}
          infinite={true}
          showDots={true}
          // customDot={<CustomDot/>}
          // renderDotsOutside={renderButtonGroupOutside} 
          renderDotsOutside={true}
          // autoPlay={true}
          ssr={true} // means to render carousel on server-side.
          autoPlaySpeed={5000}
          keyBoardControl={true}
          transitionDuration={1000}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />}
          // renderDotsOutside={renderButtonGroupOutside}
        >
          {images}
        </Carousel> 
      );
    } else if (images) {
      console.log('images === 1. value of "images": ', images)
      return images;
    } else {return null;}
  }       
    
  return(
    <>
      <Container className="recipe-page-container">
        <h1>Recipe: {recipeName}</h1>


        {images ? null :
        <Spinner variant="success" animation="border" role="status" id="spinner-centered"><span className="sr-only">Loading...</span></Spinner>
        }
        {carousel()}

        <h2>Recipe Details</h2>
        <ListGroup>
          <ListGroup.Item>
            Cook: {cook}
          </ListGroup.Item>
          <ListGroup.Item>
            Description: {description}
          </ListGroup.Item>
        </ListGroup>
        <h2>Ingredients</h2>
        <ListGroup>
          {ingredients}
        </ListGroup>
        <h2>Instructions</h2>
        <ListGroup>
          {instructions}
        </ListGroup>
      </Container>
    </>
  );
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default Recipe;
