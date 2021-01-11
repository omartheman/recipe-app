import React, { useState, useEffect } from 'react';
import axios from 'axios';
import global_url_variable from './global_url_variable';
import { Button, Container, Form, ListGroup, Row, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import { SRLWrapper } from 'simple-react-lightbox';
import './RecipePage.scss';
import "react-multi-carousel/lib/styles.css";
import './EditRecipe.scss';
import ImageCrop from './ImageCrop';
import image1 from './images/omar-3-profile.jpg';
import image2 from './images/imageFile_dateVal_1607883271123_boat_on_lake.jpg';
import image3 from './images/imageFile_dateVal_1607883271125_block-game-thumbnail copy.png';
import image4 from './images/imageFile_dateVal_1607883271125_block-game-thumbnail.png';
import image5 from './images/imageFile_dateVal_1607898827213_bootstrap_sample_site copy.png';
import image6 from './images/imageFile_dateVal_1607898827213_bootstrap_sample_site.png';

const url = global_url_variable;
const urlRecipe = `${url}getrecipe`;
const urlIngredients = `${url}getingredients`;
const urlImages = `${url}get-images`;
const urlImageDelete = `${url}image-delete`;
const urlInstructions = `${url}get-instructions`;
const urlSaveChanges = `${url}recipe-update`;
// image1, image2, image3, image4, image5, image6
const arr = [ image1, image2];

function c(text, value){
  console.log(`${text}: ${value}`)
}
const Recipe = (props) => {
  const [recipeId] = useState(Number(props.match.params.recipeId));
  const [recipeName, setRecipeName] = useState(null);
  const [cook, setCook] = useState(null); 
  const [description, setDescription] = useState(null);
  const [ingredients, setIngredients] = useState(null);
  const [images, setImages] = useState(null);
  const [instructions, setInstructions] = useState(null);
  const [singleImage, setSingleImage] = useState(null);

  const [blobFile, setBlobFile] = useState(null);
  const [originalFileName, setOriginalFileName] = useState(null);
  const [newImages, setNewImages] = useState([]);
  const [numImageFields, setNumImageFields] = useState(1);
  const [imageFields, setImageFields] = useState([0]);
  const [handleRemoveImageSpinnerId, setHandleRemoveImageSpinnerId] = useState(null);

  const [imageData, setImageData] = useState();
  const [recipeUser, setRecipeUser] = useState(null);

  const carouselItems = arr.map((x, i) => (
    <div key={i} className="edit-recipe-img-container">
      <SRLWrapper>
        <img className="edit-recipe-img" src={x} alt='Recipe image.' />
      </SRLWrapper>
      <Button 
        variant="danger" 
        id_num={x.id ? x.id : 143}
        onClick={(e) => {
          const id = e.target.getAttribute('id_num');
          console.log('id', id)
          deleteImage(id);
        }}
      >
        Delete Image
      </Button>
    </div>
  ));
  function deleteImage(id){
    console.log('imageData', imageData)
    let newArr = [];
    if (imageData){
      imageData.forEach((x, i, a) => {
        console.log('x',x)
        console.log('x.id', x.id)
        if (x.id !== Number(id)){
          newArr.push(x);
        }
      })
    }
    console.log('newArr', newArr)
    setImageData(newArr);
    console.log('recipe name', recipeName)
    if (recipeName){
      axios.post(urlImageDelete, {
        id: recipeId, 
        item: recipeName,
        images: newArr
      })
      .then(res => {
        retrieveData();
      })
    }
  }
  
  //we need to retrieve data about specific recipe
  // useEffect(() => {
  //   console.log('imagedata', imageData)
  // }, [imageData])
  useEffect(() => {
    retrieveData();
  }, [recipeId]);

  const retrieveData = () => {
    axios.post(urlRecipe, {
      id: recipeId
    })
    .then(res => {
      console.log('axios recipe data', res.data)
      setRecipeUser(res.data[0].user)
      setRecipeName(res.data[0].item);
      setCook(res.data[0].cook);
      setDescription(res.data[0].description);
      return res;
    })
    .then(res => {
      const itemLow = res.data[0].item.toLowerCase();
      //RETRIEVE INGREDIENTS
      axios.post(urlIngredients, {
        id: recipeId,
        item: itemLow
      })
      .then(res => {
        setIngredients(res.data);
      })
      //RETRIEVE INSTRUCTIONS
      axios.post(urlInstructions, {
        id: recipeId,
        item: itemLow
      })
      .then(res => {
        setInstructions(res.data);
      })
      //RETRIEVE IMAGES
      axios.post(urlImages, {
        id: recipeId, 
        item: itemLow
      })
      .then(res => {
        console.log('original image data', res.data)
        setImageData(res.data);
        if (url === "http://localhost:4000/recipeapp/recipeapp-server/") {
          if (carouselItems.length > 1) {
            setImages(carouselItems)
          } else {
            setImages([
              <div className="recipe-page-single-image-container">
                <Link to="#" className="carousel-link-home">
                  <SRLWrapper>
                    <img className="recipe-page-single-image" src={image1} alt='Recipe image.' />
                  </SRLWrapper>
                </Link>
              </div>
            ]);
          }
        } else if (res.data.length === 1) {
          setImages(
            <div className="recipe-page-single-image-container">
              <Link to="#" className="carousel-link-home">
                <SRLWrapper>
                  <img className="recipe-page-single-image" src={`https://brittanyjewellneal.com/uploaded_files/${res.data[0].imageName}`} alt='Recipe image.' />
                </SRLWrapper>
              </Link>
            </div>
          );
        } else {
          setImages(res.data.map((x, i) => (
            <div key={i} className="carousel-img-container">
              <Link to="#" className="carousel-link-home">
                <SRLWrapper>
                  <img className="carousel-img" src={`https://brittanyjewellneal.com/uploaded_files/${x.imageName}`} alt='Recipe image.' />
                </SRLWrapper>
              </Link>
            </div>
          )));
        }
      })
    })
    // Following error removed because it causes an infinite loop to add dependencies 'images' and 'recipeId'. Removing the empty array argument also causes an infinite loop.
    // eslint-disable-next-line 

  }
  
  const carousel = () => {
    if (images && images.length > 1) {
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
    } else if (images) {
      return images;
    } else {return null;}
  }      

  let ingredientsList;
  if (ingredients) {
    ingredientsList = ingredients.map((x, i) => (
      <Row key={i}>
        <Col>
          <Form.Control 
            type='text'
            id_val={i}
            value={ingredients[i].ingredient}
            onChange={(e) => {
              const i = e.target.getAttribute('id_val');
              const editedIngredients = ingredients.slice();
              editedIngredients[i] = {
                ...editedIngredients[i],
                ingredient: e.target.value 
              }
              setIngredients(editedIngredients);
            }}
          />
        </Col>
        <Col>
          <Form.Control 
            type='text'
            id_val={i}
            value={ingredients[i].amount}
            onChange={(e) => {
              const i = e.target.getAttribute('id_val');
              const editedIngredients = ingredients.slice();
              editedIngredients[i] = {
                ...editedIngredients[i],
                amount: e.target.value 
              }
              setIngredients(editedIngredients);
            }}
          />
        </Col>
      </Row>
    )) 
  }
  let instructionsList;
  if (instructions) {
    instructionsList = instructions.map((x, i) => (
      <Row key={i}>
        <Col>
          <Form.Control 
            type='text'
            id_val={i}
            value={instructions[i].instruction}
            onChange={(e) => {
              const i = e.target.getAttribute('id_val');
              const editedInstructions = instructions.slice();
              editedInstructions[i] = {
                ...editedInstructions[i],
                instruction: e.target.value 
              }
              setInstructions(editedInstructions);
            }}
          />
        </Col>
      </Row>
    )) 
  }
  function handleImageCrop(blobFile, index){
    const newImage = new File([blobFile], blobFile.name, {type: blobFile.type});
    console.log('handleImageCrop name',blobFile.name)
    const handleNewImages = newImages;
    handleNewImages[index] = newImage;
    setNewImages(handleNewImages);
  }
  function addImageField(){
    setImageFields([...imageFields, numImageFields]);
    let newNumImageFields = numImageFields;
    newNumImageFields++;
    setNumImageFields(prev => {
      return(newNumImageFields);
    }); 
  }
  function removeImageField(ind){
    const newImageFields = imageFields;
    c('imagefields', newImageFields)
    newImageFields.splice(ind, 1);
    setImageFields(newImageFields);

    const handleNewImages = newImages; 
    images.splice(ind, 1);
    setNewImages(handleNewImages);
  }
  const handleRemoveImageSpinner = (id) => {
    setHandleRemoveImageSpinnerId(id);
    return(id);
  } 
  const imageFieldsList = imageFields.map((idNum, ind) =>  (
    <ListGroup.Item key={idNum} variant="primary">
      <ImageCrop id_num={idNum} index_num={ind} onImageCrop={handleImageCrop}/>
      { imageFields.length > 1 && 
        <>
          {handleRemoveImageSpinnerId === idNum ?
            <Spinner variant="success" animation="border" role="status" id="spinner-centered"><span className="sr-only">Loading...</span></Spinner>
            :
            <Button 
              className="recipe-upload-delete-image-button" 
              variant="outline-danger" 
              id_num={idNum}
              onClick={() => {
                handleRemoveImageSpinner(idNum);
                removeImageField(ind)
              }}
            >
                Remove Image #{ind + 1}
            </Button>
          }
        </>
      }
    </ListGroup.Item>
  ));
  const newImagesSubmit = () => {
    c('newimages', images)
    console.log(images)
    console.log(imageData);
  }
  newImagesSubmit();
  const saveChanges = () => {
    if (recipeUser === props.loggedInUser) {
      axios.post(urlSaveChanges, {
        id: recipeId,
        item: recipeName,
        cook: cook,
        description: description
      })
    }
  }
  return(
    <>
      <Container className="edit-recipe-page-container">
        <h1>Recipe Name:</h1>
        <Form.Control 
          className="edit-recipe-recipe-name-field"
          type="text"
          value={recipeName}
          onChange={(e) => {
            setRecipeName(e.target.value);
          }}
        />

        <div className="upload-section">
          <h2>Upload Images</h2>
          <ListGroup>
            {imageFieldsList}
          </ListGroup>
          <Button className="button-add" variant="success" onClick={addImageField}>Add Another Image</Button>
        </div>
        {images ? null :
        <Spinner variant="success" animation="border" role="status" id="spinner-centered"><span className="sr-only">Loading...</span></Spinner>
        }
        {images}

        <h2>Recipe Details</h2>
        Cook:
        <Form.Control 
          type="text" 
          value={cook} 
          onChange={(e) => {
            setCook(e.target.value)}
          }
        />
        Description: 
        <Form.Control type="text" value={description} onChange={(e) => {setDescription(e.target.value)}} />
        
        <h2>Ingredients</h2>
        {ingredientsList}
        <h2>Instructions</h2>
        {instructionsList}
        
          <Button className="edit-recipe-page-edit-recipe-button" variant="success" as={Link} to={`/recipeapp/edit-recipe/${recipeId}`}>Save Changes</Button>
          <Button className="edit-recipe-page-edit-recipe-button" variant="warning" as={Link} to={`/recipeapp/edit-recipe/${recipeId}`}>Cancel Changes</Button>
      </Container>
    </>
  );
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

export default Recipe;
