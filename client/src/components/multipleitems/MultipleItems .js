import React, { Component, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "../Product";
import "./MultipleItems.css";

import Aos from "aos";

const MultipleItems = (props) => {
  const settings = {
    speed: 500,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div data-aos="fade-up" data-aos-duration="1200">
      <Slider {...settings}>
        {props.products.map((product) => (
          <Col key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Slider>
    </div>
  );
};

export default MultipleItems;
