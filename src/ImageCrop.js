import React, { PureComponent } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import './ImageCrop.scss';
import { Row, Col, Form } from 'react-bootstrap';

class ImageCrop extends PureComponent {
  state = {
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
        this.props.onImageCrop(blob, this.props.index_num);
        resolve(this.fileUrl);
      }, 'image');
    });
  }
  render() {
    const { crop, croppedImageUrl, src } = this.state;
    return (
      <div className="">
        <Form.Label htmlFor={`file-upload-${this.props.id_num}`} className="file-upload-new-button btn btn-info">
          Choose Image #{this.props.index_num + 1}
        </Form.Label>
        {src ? ` Image #${this.props.index_num + 1} shown below` : " No image chosen."}
        <Form.File className="image-crop-file-input" id={`file-upload-${this.props.id_num}`} label="Upload Image" type="file" accept="image/*" onChange={this.onSelectFile} />
        {src && 
          <>
            <h3 className="image-crop-title">Please crop your image to the given ratio.</h3>
            <Row>
              <Col>
                <h3>Original Image</h3>
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
              </Col>
              <Col>
                <h3>Cropped Image</h3>
                <div  className="cropped-image-column">
                  {croppedImageUrl && (
                    <img alt="Crop" style={{ maxWidth: '100%' }} src={croppedImageUrl} />
                  )}
                </div>
              </Col>
            </Row>
          </>
        }
      </div>
    );
  }
}

export default ImageCrop;