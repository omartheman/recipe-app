import './ToTry.scss';
import { Button, Container, Form, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ImageCrop from './ImageCrop'; 

function ToTry(props) {
  
  return(
    <>
      <Container className="to-try-container">
        <h1>To Try</h1>
        <h2>Add a picture or link here, to save a recipe for the future!</h2>
        <ListGroup>
          <ListGroup.Item as={Link} variant="secondary">Test</ListGroup.Item>
        </ListGroup> 
        <Form>
          <Form.Label>Recipe Link:</Form.Label>
          <Form.Control type="text"></Form.Control>

          
          <div className="upload-section">
              <h2>Upload Images</h2>
              <ListGroup>
                <ListGroup.Item variant="primary">
                  <ImageCrop />
                </ListGroup.Item>
              </ListGroup>
              <Button className="button-add" variant="success" >Add Another Image</Button>
          </div>
        </Form>
        <Button>Add a Recipe To Try</Button>
      </Container>
    </>
  )
}

export default ToTry; 