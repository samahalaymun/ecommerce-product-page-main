import React from 'react'
import { Row, Col, Image } from "react-bootstrap";
import ButtonWithIcon from './common/ButtonWithIcon';

function ProductImagePreview({
  image,
  thumbGallary,
  thumbClicked,
  setShowLightbox,
  onClickLeftArrow,
  onClickRightArrow
}) {
  return (
    <>
      <div className="product-image">
        <ButtonWithIcon
          className="arrow-btn arrow-btn-right"
          onClick={onClickLeftArrow}
        >
          <i class="fa-solid fa-arrow-left"></i>
        </ButtonWithIcon>
        <Image
          src={image}
          className="img"
          onClick={() => setShowLightbox(true)}
        ></Image>
        <ButtonWithIcon
          className="arrow-btn arrow-btn-left"
          onClick={onClickRightArrow}
        >
          <i class="fa-solid fa-arrow-right"></i>
        </ButtonWithIcon>
      </div>
      <Row className="thumb-gallery">
        {thumbGallary.map((thumb, index) => {
          return (
            <Col md={3} key={index}>
              <Image
                src={thumb}
                id={`thumb-${index}`}
                className="thumb"
                onClick={() => thumbClicked(index)}
              ></Image>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default ProductImagePreview
