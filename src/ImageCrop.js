import React, { PureComponent } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import axios from 'axios';
import global_url_variable from './global_url_variable';

const url = global_url_variable;
const urlFileUpload = `${url}image-upload`;

class ImageCrop extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      src: null,
      crop: {
        unit: '%',
        width: 30,
        aspect: 3 / 2,
      },
      croppedImageUrl: null,
      blobFile: null,
      originalFileName: null
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        this.setState({ src: reader.result })
      );
      reader.readAsDataURL(e.target.files[0]);
      console.log('selected',e.target.files[0])
      this.setState({originalFileName: e.target.files[0].name})
    }
  };

  // If you setState the crop in here you should return false.
  onImageLoaded = image => {
    this.imageRef = image;
  };

  onCropComplete = crop => {
    this.makeClientCrop(crop);
  };

  onCropChange = (crop, percentCrop) => {
    // You could also use percentCrop:
    // this.setState({ crop: percentCrop });
    this.setState({ crop });
  };

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop,
        this.state.originalFileName
      );
      this.setState({ croppedImageUrl }, ()=>{console.log('cropped',this.state.croppedImageUrl)});
    }
  }

  getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error('Canvas is empty');
          return;
        }
        console.log(blob);
        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);
        this.setState({blobFile: blob})
        resolve(this.fileUrl);
      }, 'image/jpeg');
    });
  }
  onSubmit(e){
    e.preventDefault();
    const {blobFile} = this.state;
    const newImage = new File([blobFile], blobFile.name, {type: blobFile.type});
    let formData = new FormData();
    formData.append("imageFile", newImage, newImage.name)
    console.log('newimage.name',newImage.name)
    // const formData = new FormData();
    // formData.append(
    //   "imageFile",
    //   imageFile,
    //   // imageFile.name
    // );
    axios.post(urlFileUpload, formData)
    .then(res => {
      console.log(res);
    });
  }
  render() {
    const { crop, croppedImageUrl, src } = this.state;

    return (
      <div className="App">
        <div>
          <input type="file" accept="image/*" onChange={this.onSelectFile} />
        </div>
        {src && (
          <ReactCrop
            src={src}
            crop={crop}
            ruleOfThirds
            onImageLoaded={this.onImageLoaded}
            onComplete={this.onCropComplete}
            onChange={this.onCropChange}
          />
        )}
        {croppedImageUrl && (
          <img alt="Crop" style={{ maxWidth: '100%' }} src={croppedImageUrl} />
        )}
        <button onClick={this.onSubmit}>Submit Image</button>
      </div>
    );
  }
}

export default ImageCrop;