import './ToTry.scss';
import { useState, useEffect } from 'react'; 
import { Alert, Button, Container, Form, ListGroup, Row, Col } from 'react-bootstrap';
import ImageCrop from './ImageCrop'; 
import axios from 'axios';
import global_url_variable from './global_url_variable';

const url = global_url_variable;
const urlToTryUpload = `${url}to-try-upload`
const urlToTryGet = `${url}to-try-get`
const urlToTryDelete = `${url}to-try-delete`

function ToTry(props) {
  const [item, setItem] = useState(null);
  const [link, setLink] = useState(null);
  const [image, setImage] = useState(null);
  const [loginAlert, setLoginAlert] = useState(null);
  const [tryItems, setTryItems] = useState(null);
  useEffect(()=>{
    console.log(item)
  })
  useEffect(() => {
    axios.post(urlToTryGet, {
      loggedInUser: props.loggedInUser
    })
    .then(res => {
      setTryItems(res.data);
    })
  }, [props.loggedInUser]);
  const handleLinkInput = (e) => {
    setLink(e.target.value)
  }
  const handleImageCrop = (blobFile, index) => {
    const newImage = new File([blobFile], blobFile.name, {type: blobFile.type});
    setImage([newImage])
  }
  const postRecipeToTry = () => {
    let formData = new FormData();
    if (!props.loggedInUser || props.loggedInUser === ''){
      setLoginAlert('You must be logged in to add recipe.');
      return; 
    }
    if (image) {
      formData.append('imageFile', image[0], image[0].name);
    }
    formData.append('loggedInUser', props.loggedInUser);
    formData.append('link', link);
    formData.append('item', item);

    axios.post(urlToTryUpload, formData)
    .then(res => {
      console.log('Response in To Try Post: ', res)
      console.log('getting new items')
      axios.post(urlToTryGet, {
        loggedInUser: props.loggedInUser
      })
      .then(res => {
        setTryItems(res.data);
      })
    })
  }
  const deleteToTry = (e) => {
    const id = e.target.getAttribute('id_num');
    axios.delete(urlToTryDelete, {
      data: {
        id: id, 
        loggedInUser: props.loggedInUser
      }
    })
    .then(res => {
      console.log(res);
      axios.post(urlToTryGet, {
        loggedInUser: props.loggedInUser
      })
      .then(res => {
        setTryItems(res.data);
      })
    })
  }
  let tryList = null;
  if (tryItems) {
    if (tryItems.length > 0) {

      tryList = tryItems.map((x, i) => 
        <ListGroup.Item variant="secondary" key={i}>
          <Row>
            <Col>
              {x.item}
            </Col>
            <Col>
            <a href={x.link} target="_blank">
              {x.link}
            </a>
            </Col>
            <Col>
              Tags
            </Col>
            <Col>
              image
              <Button 
                variant="outline-danger" 
                className="to-try-delete-button"
                onClick={deleteToTry}
                id_num={x.id}
              >
                X
              </Button>
            </Col>
          </Row>
        </ListGroup.Item>
      );
    }
  }
  const handleItemInput = (e) => {
    setItem(e.target.value);
  }
  return(
    <>
      <Container className="to-try-container">
        <h1>To Try</h1>
        <h2>Save a recipe for the future! Add a picture and/or link here.</h2>
        <Button>Add a Recipe To Try</Button>
        <Form>
          <Form.Label><h3>Recipe Name:</h3></Form.Label>
          <div className="to-try-message-required">(Required)</div>
          <Form.Control type="text" onChange={handleItemInput} />
          <Form.Label><h3>Recipe Link:</h3></Form.Label>
          <div className="to-try-message-optional">(Optional)</div>
          <Form.Control type="text" onChange={handleLinkInput} />
          <div className="">
              <h3 className="to-try-upload-images-title to-try-upload-titles">Upload Image:</h3>
              <ListGroup>
                <div className="to-try-message-optional">(Optional)</div>
                <ListGroup.Item variant="primary">
                  <ImageCrop onImageCrop={handleImageCrop} />
                </ListGroup.Item>
              </ListGroup>
          </div>
          {loginAlert &&
            <Alert variant="warning" className="to-try-login-alert alert-warning">You must be logged in to submit!</Alert>
          }
          <Button onClick={postRecipeToTry}>Submit</Button>
        </Form>
        <ListGroup>
          <ListGroup.Item variant="secondary">
            <Row>
              <Col>
                <strong>Recipe</strong>
              </Col>
              <Col>
                <strong>Link</strong>
              </Col>
              <Col>
                <strong>Tags</strong>
              </Col>
              <Col>
                <strong>Image</strong>
              </Col>
            </Row>
          </ListGroup.Item>
          {tryItems && tryList}
        </ListGroup> 
      </Container>
    </>
  )
}

export default ToTry; 