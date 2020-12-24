import './ToTry.scss';
import { useState, useEffect } from 'react'; 
import { Alert, Button, Container, Form, ListGroup, Row, Col } from 'react-bootstrap';
import ImageCrop from './ImageCrop'; 
import NavbarContainer from './NavbarContainer';
import axios from 'axios';
import global_url_variable from './global_url_variable';
import { SRLWrapper } from 'simple-react-lightbox';

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
  const [deletePrimer, setDeletePrimer] = useState(null);
  const [confirmMsg, setConfirmMsg] = useState(false);
  const [showInputs, setShowInputs] = useState(false);
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
    setShowInputs(false);
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
  const deleteToTry = () => {
    axios.delete(urlToTryDelete, {
      data: {
        id: deletePrimer.id, 
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
        <ListGroup.Item variant="secondary" key={i} className="to-try-item-row">
          <Row>
            <Col>
              <span className="to-try-col-titles-mobile">Item:</span> {x.item}
            </Col>
            <Col>
            <span className="to-try-col-titles-mobile">Link: </span>
            <a href={x.link} target="_blank" rel="noreferrer">
              {x.link}
            </a>
            </Col>
            <Col>
              <span className="to-try-col-titles-mobile">Tags:</span> Tags
            </Col>
            <Col className="to-try-img-delete-btn-col">
              <SRLWrapper>
                <img 
                  className="to-try-img"
                  src={`https://brittanyjewellneal.com/uploaded_files/${x.imageName}`} 
                  alt={x.imageName} 
                />
              </SRLWrapper>
              <Button 
                variant="outline-danger" 
                className="to-try-delete-button"
                onClick={() => {
                  setDeletePrimer({id: x.id, item: x.item});
                  setConfirmMsg(true);
                }}
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
  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  };
  const size = useWindowSize();
  return(
    <>
      {confirmMsg && 
      <div className="to-try-delete-msg">
        <Container>
          <h3>Are you sure you want to delete item: {deletePrimer.item}?</h3>
          <div className="to-try-delete-msg-btn-container">
            <Button 
              variant="success"
              onClick={() => {
                setConfirmMsg(false);
              }}
            >
              No! Don't Delete It!
            </Button>
            <Button 
              variant="danger" 
              onClick={() => {
                setConfirmMsg(false);
                deleteToTry();
              }}
            >
              Yes, Delete It.
            </Button>
          </div>
        </Container>
      </div>
      }
      <NavbarContainer
        loginSubmit={props.loginSubmit}
        onLoginFormChange={props.onLoginFormChange}
        loggedInUser={props.loggedInUser}
        onLogout={props.onLogout}
        username={props.username}
        password={props.password}
      />
      <Container className="to-try-container">
        <h1>To Try</h1>
        <h2>A list for future culinary endeavors.</h2>
        {showInputs ?  
          <>
            <Button variant="warning" onClick={() => {setShowInputs(false)}}>Actually, Don't Add Now.</Button>
            <Form>
              <Form.Label><h3>Recipe Name:</h3></Form.Label>
              <div className="to-try-message-required">(Required)</div>
              <Form.Control type="text" onChange={handleItemInput} />
              <Form.Label><h3>Recipe Link:</h3></Form.Label>
              <div className="to-try-message-optional">(Optional)</div>
              <Form.Control type="text" onChange={handleLinkInput} />
              <div className="">
                  <h3 className="to-try-upload-images-title">Upload Image:</h3>
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
              <Button onClick={postRecipeToTry} className="to-try-submit-btn">Submit</Button>
            </Form>
          </>
          : 
          <Button onClick={() => {setShowInputs(true)}}>Add a Recipe To Try</Button>
        }
        <ListGroup className="to-try-list-container">
          {size.width >= 991 && 
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
          }
          {tryItems && tryList}
        </ListGroup> 
      </Container>
    </>
  )
}

export default ToTry; 