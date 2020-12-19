import Navbar from './NavbarContainer';
import { useState } from 'react'; 
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'react-awesome-button/dist/styles.css';
import './RecipeUploadSuccess.css'
import { Link, Redirect } from 'react-router-dom';

function RecipeUploadSuccess () {
  const [redirect, setRedirect] = useState(null);
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
  return(
    <>
      {redirect}
      <Container>
        <h1>Success!</h1>
        <h2>Congratulations, your awesome new recipe was uploaded!</h2>
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