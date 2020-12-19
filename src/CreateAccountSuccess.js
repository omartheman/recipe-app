import { useState } from 'react'; 
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'react-awesome-button/dist/styles.css';
import './CreateAccountSuccess.scss'
import { Link, Redirect } from 'react-router-dom';

function CreateAccountSuccess (props) {
  const [redirect, setRedirect] = useState(null);
  const handleRedirect = (id) => {
    console.log('handle work')
    switch (id) {
      case 'recipe-upload':
        console.log('heyder')
        setRedirect(<Redirect as={Link} to={`/recipeapp/${id}`} />);
      break;
      case '':
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
      <Container className="create-account-success-container">
        <h1>Success!</h1>
        <h2>Yahoo{` ${props.loggedInUser}`}! Your account was created!</h2>
        <Row className="success-redirect-buttons">
          <Col>
            <Button onClick={() => {handleRedirect('recipe-upload')}}>Upload Your First Recipe!</Button> 
          </Col>
          <Col>
            <Button onClick={() => {handleRedirect('')}}>Go to Homepage</Button> 
          </Col>
        </Row>
      </Container>
      
    </>
  );
}

export default CreateAccountSuccess;