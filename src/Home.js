import React from 'react';
import HomeMainCont from './HomeMainCont';
import Navbar from './Navbar';
import {Container, Row, Col} from 'react-bootstrap';
import FeaturedRecipe from './FeaturedRecipe';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import global_url_variable from './global_url_variable';
import axios from 'axios';
import image1 from './images/imageFile_dateVal_1607883271123_boat_on_lake copy.jpg';
import image2 from './images/imageFile_dateVal_1607883271123_boat_on_lake.jpg';
import image3 from './images/imageFile_dateVal_1607883271125_block-game-thumbnail copy.png';
import image4 from './images/imageFile_dateVal_1607883271125_block-game-thumbnail.png';
import image5 from './images/imageFile_dateVal_1607898827213_bootstrap_sample_site copy.png';
import image6 from './images/imageFile_dateVal_1607898827213_bootstrap_sample_site.png';
// image1, image2, image3, image4, image5, image6
const arr = [ image1, image2, image3, image4, image5, image6];
const carouselItems = arr.map( x => (
  <div className="carousel-img-container"><img className="carousel-img" src={x} alt='alt' /></div>
));

const url = global_url_variable;
const urlImagesHomeCarousel = `${url}get-images-home-carousel`;

class Home extends React.Component {
  state = {
    images: null,
    imageNames: []
  }
  componentDidMount(){
    //RETRIEVE IMAGES
    axios.get(url)
    .then(res => {
      console.log('res recipes',res);
      res.data.map(x => {
        axios.post(urlImagesHomeCarousel, {
          id: x.id, 
          item: x.item
        })
        .then(res => {
          console.log('carousel res',res)
          this.setState({imageNames: [...this.state.imageNames, res.data]}, () => {console.log('this.state.imageNames',this.state.imageNames)})
        })
      })
    })
    //set image links on carousel 
  }
  render(){
    const {loggedInUser, onLogout} = this.props;
    const images = this.state.imageNames.map(x => (
      <div className="carousel-img-container">
        <img 
          className="carousel-img" 
          src={`https://brittanyjewellneal.com/uploaded_files/${x}`} 
          alt={x} 
        />
      </div>
    ))
    const carousel = () => {
      if (this.state.imageNames) {
        return(
          <Carousel 
            responsive={responsive}
            infinite={true}
            showDots={true}
            // customDot={<CustomDot/>}
            // renderDotsOutside={renderButtonGroupOutside} 
            renderDotsOutside={true}
            autoPlay={true}
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
        return null;
      }
    }
    return(
      <div>
        <Navbar 
          loggedInUser={loggedInUser}
          onLogout={onLogout}
        />
        <Container>

          {carousel()} 
          <Row>
            <Col lg>
              <HomeMainCont />
            </Col>
            <Col lg>
              <FeaturedRecipe />
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