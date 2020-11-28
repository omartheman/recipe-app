import React from 'react';
import HomeMainCont from './HomeMainCont';
import Navbar from './Navbar';
import {Container, Row, Col} from 'react-bootstrap';
import FeaturedRecipe from './FeaturedRecipe';

class Home extends React.Component {
  render(){
    const {loggedInUser} = this.props;
    return(
      <div>
        <Navbar 
          loggedInUser={loggedInUser}
        />
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