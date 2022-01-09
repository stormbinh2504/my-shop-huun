// https://www.youtube.com/watch?v=FmZ3YkwQPLM
import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Paginate from "../components/Paginate";
import Meta from "../components/Meta";
import ProductCarousel from "../components/ProductCarousel";
import Collection from "../components/collection/Collection";
import MultipleItems from "../components/multipleitems/MultipleItems ";
import Aos from "aos";
import Facility from "../components/facility/Facility";
import ScrollTotop from "../components/scrollto/ScrollTotop";
import CustomVideo from "../components/videoyoutube/CustomVideo";

function HomeScreen({ match }) {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;

  const [visible, setVisible] = useState(4);

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);

  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  const loadMore = () => {
    const totalproduct = products.length;
    if (visible < totalproduct) {
      setVisible(visible + 4);
    }
  };

  return (
    <>
      <Meta />
      {!keyword && <ProductCarousel />}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message />
      ) : (
        <>
          <ScrollTotop></ScrollTotop>
          <Collection></Collection>
          <h1>Latest Products</h1>
          <MultipleItems products={products}></MultipleItems>
          <h1>All Products</h1>
          <div data-aos="fade-up" data-aos-duration="1200">
            <Row>
              {products.slice(0, visible).map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
            {visible < products.length ? (
              <div className="item-center">
                <Button onClick={() => loadMore()}>Loadmore ...</Button>
              </div>
            ) : (
              " "
            )}

            {/* <Paginate
              pages={pages}
              page={page}
              keyword={keyword ? keyword : ""}
            /> */}
          </div>
          <CustomVideo></CustomVideo>
          <Facility></Facility>
        </>
      )}
    </>
  );
}

export default HomeScreen;
