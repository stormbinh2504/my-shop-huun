import React, { useEffect } from "react";
import "./collection.css";
import "aos/dist/aos.css";
import Aos from "aos";

const Collection = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section id="collection" className="section collection">
      <div
        className="collection__container"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="collection__box">
          <div className="img__container">
            <img
              className="collection_02"
              src="/images/collection/collection_02.png"
              alt=""
            />
          </div>
          <div className="collection__content">
            <div className="collection__data">
              <span>New Colors Introduced</span>
              <h1>HEADPHONES</h1>
              <a href="#">SHOP NOW</a>
            </div>
          </div>
        </div>
        <div className="collection__box">
          <div className="img__container">
            <img
              className="collection_01"
              src="./images/collection/collection_01.png"
              alt=""
            />
          </div>
          <div className="collection__content">
            <div className="collection__data">
              <span>Phone Device Presets</span>
              <h1>SMARTPHONES</h1>
              <a href="#">SHOP NOW</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
