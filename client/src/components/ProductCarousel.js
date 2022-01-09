import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import Loader from "./Loader";
import Message from "./Message";
import { listTopProducts } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
const ProductCarousel = () => {
  const dispatch = useDispatch();
  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;
  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);
  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <div className="slider-carousel">
      <Carousel
        pause="hover"
        className="hero__center"
        style={{ marginTop: "30px" }}
      >
        <Carousel.Item key={1}>
          <div class="hero__left">
            <span class="">New Inspiration 2020</span>
            <h1 class="">PHONES MADE FOR YOU!</h1>
            <p>Trending from mobile and headphone style collection</p>
            <a href="#">
              <button class="hero__btn">SHOP NOW</button>
            </a>
          </div>
          <div class="hero__right">
            <img src="/images/slide/banner_01.png" alt="" fluid />
          </div>
        </Carousel.Item>
        <Carousel.Item key={2}>
          <div class="hero__left">
            <span>New Inspiration 2020</span>
            <h1>PHONES MADE FOR YOU!</h1>
            <p>Trending from mobile and headphone style collection</p>
            <a href="#">
              <button class="hero__btn">SHOP NOW</button>
            </a>
          </div>
          <div class="hero__right">
            <img src="/images/slide/banner_02.png" alt="" fluid />
          </div>
        </Carousel.Item>
        {/* {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} fluid />
            <Carousel.Caption className="carousel-caption">
              <h2>
                {product.name} (${product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))} */}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
