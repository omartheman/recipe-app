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
  const [toTryAlert, setToTryAlert] = useState(null);
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
  const handleImageCrop = (blobFile, index) => {
    const newImage = new File([blobFile], blobFile.name, {type: blobFile.type});
    setImage([newImage])
  }
  const postRecipeToTry = () => {
    if (!props.loggedInUser || props.loggedInUser === ''){
      setToTryAlert('You must be logged in to add recipe.');
      setTimeout(() => {
        setToTryAlert(null);
      }, 3000);
      return; 
    }
    if (!item || item ==='') {
      setToTryAlert('Please give the recipe name.');
      return;
    }
    setShowInputs(false);
    let formData = new FormData();
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
              {size.width < 992 && 
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
              }
            </Col>
            <Col>
            <span className="to-try-col-titles-mobile">Link: </span>
            {(x.link && x.link !== 'null') ?
              <a href={x.link} target="_blank" rel="noreferrer">
                {x.link}
              </a>
              :
              <span>No link.</span>
            }
            </Col>
            <Col>
            <span className="to-try-col-titles-mobile">Tags: </span> 
              {x.tags ? 
                <span>(Tags)</span>
                :
                <span>No tags.</span>
              }
            </Col>
            <Col className="to-try-img-delete-btn-col">
              {x.imageName ?
                <SRLWrapper>
                  <img 
                    className="to-try-img"
                    src={
                      url !== 'http://localhost:4000/recipeapp/recipeapp-server/' ?
                      `https://brittanyjewellneal.com/uploaded_files/${x.imageName}`
                      : 'https://images.unsplash.com/photo-1606851361443-fd99450eda8c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80'
                    } 
                    alt={x.imageName} 
                  />
                </SRLWrapper>
                :
                <span>
                  No image.
                </span>
              }
              {size.width >= 992 && 
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
              }
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
            <Button className="to-try-add-button" variant="warning" onClick={() => {setShowInputs(false)}}>Actually, Don't Add Now.</Button>
            <Form>
              <Form.Label><h3>Recipe Name:</h3></Form.Label>
              <div className="to-try-message-required">(Required)</div>
              <Form.Control type="text" onChange={handleItemInput} />
              <Form.Label><h3>Recipe Link:</h3></Form.Label>
              <div className="to-try-message-optional">(Optional)</div>
              <Form.Control type="text" onChange={handleLinkInput} />
              <div>
                  <Form.Label>
                    <h3 className="to-try-upload-images-title">Upload Image:</h3>
                  </Form.Label>
                  <ListGroup>
                    <div className="to-try-message-optional">(Optional)</div>
                      <ImageCrop onImageCrop={handleImageCrop} />
                  </ListGroup>
              </div>
              {toTryAlert &&
                <Alert variant="warning" className="to-try-login-alert alert-warning">{toTryAlert}</Alert>
              }
              <Button onClick={postRecipeToTry} className="to-try-submit-btn">Submit My "To Try"</Button>
            </Form>
          </>
          : 
          <Button className="to-try-add-button" onClick={() => {setShowInputs(true)}}>Add a Recipe To Try</Button>
        }
        <ListGroup className="to-try-list-container">
          {(size.width >= 991 && props.loggedInUser && props.loggedInUser !== '') &&
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
          {(!props.loggedInUser || props.loggedInUser === '' ) &&
            <Alert variant="caution" className="alert-warning">Please log in to view your 'To Try' list.</Alert>
          }
          {(props.loggedInUser && props.loggedInUser !== '' ) &&
            <>
              {tryItems && tryList}
            </>
          }
          {url === 'http://localhost:4000/recipeapp/recipeapp-server/' &&
            <ListGroup.Item variant="secondary" className="to-try-item-row">
              <Row>
                <Col>
                  <span className="to-try-col-titles-mobile">Item:</span> Item
                  {
                    size.width < 992 && 
                    <Button 
                      variant="outline-danger" 
                      className="to-try-delete-button"
                    >
                      X
                    </Button>
                  }
                </Col>
                <Col>
                <span className="to-try-col-titles-mobile">Link: </span>
                <a href='#' target="_blank" rel="noreferrer">
                  Link
                </a>
                </Col>
                <Col>
                  <span className="to-try-col-titles-mobile">Tags:</span> Tags
                </Col>
                <Col className="to-try-img-delete-btn-col">
                  <SRLWrapper>
                    <img 
                      className="to-try-img"
                      src={'https://images.unsplash.com/photo-1606851361443-fd99450eda8c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80'
                      } 
                      alt={'alt'} 
                    />
                  </SRLWrapper>
                  {
                    size.width >= 992 && 
                    <Button 
                      variant="outline-danger" 
                      className="to-try-delete-button"
                    >
                      X
                    </Button>
                  }
                </Col>
              </Row>
            </ListGroup.Item>
          }

        </ListGroup> 
      </Container>
    </>
  )
}

export default ToTry; 