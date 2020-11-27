import React from 'react';
import HomeMainCont from './HomeMainCont';
import NavbarContainer from './NavbarContainer';
import {Container, Row, Col} from 'react-bootstrap';
import FeaturedRecipe from './FeaturedRecipe';

class Home extends React.Component {
  render(){
    return(
      <div>
        <NavbarContainer />
        <Container>
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

export default Home;