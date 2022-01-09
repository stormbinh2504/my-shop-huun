import React, { useEffect } from "react";
import "./Facility.css";
import Aos from "aos";

const Facility = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div class="container mt-5" data-aos="fade-up" data-aos-duration="1200">
      <div class="row">
        <div class="col-md-4 col-sm-12 box-service">
          <div class="lst-service text-center">
            <a href="">
              <i class="fa fa-plane" aria-hidden="true"></i>
            </a>
            <h4>Free Shipping Worldwide</h4>
          </div>
        </div>
        <div class="col-md-4 col-sm-12 box-service ">
          <div class="lst-service text-center">
            <a href="">
              <i class="fa fa-reply" aria-hidden="true"></i>
            </a>
            <h4>Free Return Exchange</h4>
          </div>
        </div>
        <div class="col-md-4 col-sm-12 box-service ">
          <div class="lst-service text-center">
            <a href="">
              <i class="fa fa-life-ring" aria-hidden="true"></i>
            </a>
            <h4>Quality Support By 24/7</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facility;
