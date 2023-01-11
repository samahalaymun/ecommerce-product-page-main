import React, { useContext, useState } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Product1 from "../assets/image-product-1.jpg";
import Product2 from "../assets/image-product-2.jpg";
import Product3 from "../assets/image-product-3.jpg";
import Product4 from "../assets/image-product-4.jpg";
import Thumb1 from "../assets/image-product-1-thumbnail.jpg";
import Thumb2 from "../assets/image-product-2-thumbnail.jpg";
import Thumb3 from "../assets/image-product-3-thumbnail.jpg";
import Thumb4 from "../assets/image-product-4-thumbnail.jpg";
import ProductImagePreview from "../components/ProductImagePreview";
import ProductDetailsPreview from "../components/ProductDetailsPreview";
import Lightbox from "../components/Lightbox";
import { CartContext } from "../context/CartContext";

function Product() {
  const [heroImage, setHeroImage] = useState(Product1);
  const [heroImages, setHeroImages] = useState([
    Product1,
    Product2,
    Product3,
    Product4,
  ]);
  const [thumb, setThumb] = useState([Thumb1, Thumb2, Thumb3, Thumb4]);
  const [thumbIsClicked, setThumbIsClicked] = useState(false);
  const [productDetails, setProductDetails] = [
    {
      id: 1,
      company: "sneaker company",
      title: "Fall Limited Edition Sneakers",
      description: `
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything 
          the weather can offer.
      `,
      price: 125.0,
      oldPrice: 250.0,
      discount: "50%",
      image: Thumb1,
    },
  ];
  const [counter, setCounter] = useState(1);
  const [showLightbox, setShowLightbox] = useState(false);
  const [index, setIndex] = useState(0);

  
  const thumbClicked = (index) => {
    setHeroImage(heroImages[index]);
    thumb.forEach((thumb, index) => {
      document
        .getElementById(`thumb-${index}`)
        .classList.remove("thumb-clicked");
    });
    document.getElementById(`thumb-${index}`).classList.add("thumb-clicked");
  };

  const decreaseCounter = () => {
    if (counter > 1) {
      setCounter((prev) => prev - 1);
    }
  };

  const increaseCounter = () => {
    setCounter((prev) => prev + 1);
  };
  const onClickLeftArrow = () => {
   
    if(index > 0){
       setHeroImage(heroImages[index-1]);
       setIndex((prev) => prev - 1);
       console.log(index);
      
    }
  };
  const onClickRightArrow = () => {
    
    if(index <3){
      setHeroImage(heroImages[index+1]);
      setIndex((prev) => prev + 1);
      console.log(index);
      
    }
  };
  return (
    <main>
      {showLightbox && (
        <Lightbox
          image={heroImage}
          thumbGallary={thumb}
          thumbClicked={thumbClicked}
          setShowLightbox={setShowLightbox}
        />
      )}
      <Container>
        <div className="wrapper">
          <Row>
            <Col xs={12} sm={12} lg={6} md={12} className="space">
              <ProductImagePreview
                image={heroImage}
                thumbGallary={thumb}
                thumbClicked={thumbClicked}
                setShowLightbox={setShowLightbox}
                onClickLeftArrow={onClickLeftArrow}
                onClickRightArrow={onClickRightArrow}
              />
            </Col>
            <Col xs={12} sm={12} lg={6} md={12} className="space">
              <ProductDetailsPreview
                productDetails={productDetails}
                decreaseCounter={decreaseCounter}
                increaseCounter={increaseCounter}
                counter={counter}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </main>
  );
}

export default Product;
