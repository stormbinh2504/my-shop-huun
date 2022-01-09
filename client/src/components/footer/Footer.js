import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div class="box-footer">
        <div class="container">
          <div class="footer-top">
            <div class="row">
              <div class="col-12 col-sm-12 col-md-8 footer-left">
                <div class="row">
                  <div class="col-12 col-sm-12 col-md-4 footer-info">
                    <h3>MY ACCOUNT</h3>
                    <ul class="lst-info mt-4">
                      <li>
                        <a href="">My History</a>
                      </li>
                      <li>
                        <a href="">My Orders</a>
                      </li>
                      <li>
                        <a href="">My Address</a>
                      </li>
                      <li>
                        <a href="">My Personal Info</a>
                      </li>
                      <li>
                        <a href="">My Vouchers</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-12 col-sm-12 col-md-4 footer-info">
                    <h3>INFORMATION</h3>
                    <ul class="lst-info mt-4">
                      <li>
                        <a href="">Term Of Use </a>
                      </li>
                      <li>
                        <a href="">Search Terms</a>
                      </li>
                      <li>
                        <a href="">Shipping Guide</a>
                      </li>
                      <li>
                        <a href="">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="">Careers</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-12 col-sm-12 col-md-4 footer-info">
                    <h3>USEFUL LINK</h3>
                    <ul class="lst-info mt-4">
                      <li>
                        <a href="">Contact Us </a>
                      </li>
                      <li>
                        <a href="">Promotions</a>
                      </li>
                      <li>
                        <a href="">Fast Delivery</a>
                      </li>
                      <li>
                        <a href="">Latest Products</a>
                      </li>
                      <li>
                        <a href="">Custom Services</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-12 col-md-4 footer-right">
                <img src="images/logo-footer.png" alt="" />
                <div class="add">
                  <span>Add: </span>
                  <span>123 Fast Road, New York, Greater, NY 8JR, USA</span>
                </div>
                <div class="add">
                  <span>Call Us: </span>
                  <span>(00) 1234 5678 / 1234 5679</span>
                </div>
                <div class="add">
                  <span>Email: </span>
                  <span>Support@demo.com </span>
                </div>
                <div class="add">
                  <span>Open:</span>
                  <span> 9:00am - 10:00pm, everyday</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="last-footer">
        <div class="info-last-footer">
          <span>@2021 All rights reserved. Design by&nbsp; </span>
          <span>
            <a href="">binhhuun</a>
          </span>
          <span>. Power &nbsp;</span>
          <span>by Prestashop.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
