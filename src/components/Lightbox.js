import React from 'react'
import { Button } from 'react-bootstrap';
import ProductImagePreview from './ProductImagePreview';

function Lightbox({ image, thumbGallary, thumbClicked, setShowLightbox }) {
  return (
    <div className="light-box">
      <div className="light-box-img-wrapper">
        <div className="close-btn">
          <Button onClick={()=>{setShowLightbox(false)}}>&times;</Button>
        </div>
        <ProductImagePreview
          image={image}
          thumbGallary={thumbGallary}
          thumbClicked={thumbClicked}
          setShowLightbox={setShowLightbox}
        />
      </div>
    </div>
  );
}

export default Lightbox
