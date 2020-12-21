import React from 'react';
import HomeMainCont from './HomeMainCont';
import {Container, Row, Col, Spinner} from 'react-bootstrap';
import FeaturedRecipe from './FeaturedRecipe';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import global_url_variable from './global_url_variable';
import axios from 'axios';
import './Home.scss';
import { Link } from 'react-router-dom';

import image1 from './images/imageFile_dateVal_1607883271123_boat_on_lake copy.jpg';
import image2 from './images/imageFile_dateVal_1607883271123_boat_on_lake.jpg';
import image3 from './images/imageFile_dateVal_1607883271125_block-game-thumbnail copy.png';
import image4 from './images/imageFile_dateVal_1607883271125_block-game-thumbnail.png';
import image5 from './images/imageFile_dateVal_1607898827213_bootstrap_sample_site copy.png';
import image6 from './images/imageFile_dateVal_1607898827213_bootstrap_sample_site.png';
const arr = [ image1, image2, image3, image4, image5, image6];
let carouselItems = arr.map( (x, i) => (
  <div key={i} className="carousel-img-container">
    <Link to="#" className="carousel-link-home">
        <h3 className="carousel-title">Heyder</h3>
        <img className="carousel-img" src={x} alt='alt' />
    </Link>
  </div>
));

const url = global_url_variable;
const urlImagesHomeCarousel = `${url}get-images-home-carousel`;
const urlFeatured = `${url}get-featured-recipe`;

//Add featured recipe route in app.js

class Home extends React.Component {
  state = {
    images: null,
    imageNames: [],
    featuredRecipe: []
  }
  componentDidMount(){
    //RETRIEVE IMAGES
    if (url !== "http://localhost:4000/recipeapp/recipeapp-server/"){
      axios.get(url)
      .then(res => {
        res.data.map(x => {
          axios.post(urlImagesHomeCarousel, {
            id: x.id, 
            item: x.item,
          })
          .then(res => {
            this.setState({imageNames: [...this.state.imageNames, [...res.data, x.item]]})
          })
          return null;
        })
      })
      
    } else { this.setState({imageNames: ['placeholder']}) }
    axios.get(urlFeatured)
    .then(res => {
      console.log('featured res', res);
      this.setState({featuredRecipe: res.data})
    })
  }
  render(){
    let images = this.state.imageNames.map((x, i) => {
      if (this.state.featuredRecipe.length > 0){
        if (x[0] !== this.state.featuredRecipe[0]) {
          return(
            <>
              <div key={i} className="carousel-img-container">
                <Link className="carousel-link-home" to={`/recipeapp/recipe/${x[0]}`}>
                  <h3 className="carousel-title">{x[2]}</h3>
                  <img 
                    className="carousel-img" 
                    src={`https://brittanyjewellneal.com/uploaded_files/${x[1]}`} 
                    alt={x[1]} 
                  />
                </Link>
              </div>
            </>
          )
        }
      }
    })
    if (url === "http://localhost:4000/recipeapp/recipeapp-server/") {
      images = carouselItems;
    }
    const carousel = () => {
      if (this.state.imageNames.length > 0) {
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
      } else {
        return <Spinner variant="success" animation="border" role="status" className="spinner-home-carousel" id="spinner-centered"><span className="sr-only">Loading...</span></Spinner>;
      }
    }
    return(
      <div>
        <Container id="home">
          {carousel()} 
          <Row>
            <Col lg>
              <HomeMainCont />
            </Col>
            <Col lg>
              <FeaturedRecipe 
              
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
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

export default Home;