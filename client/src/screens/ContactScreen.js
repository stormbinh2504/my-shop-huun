import React, { useState } from "react";

function ContactScreen() {
  return (
    <div id="contact" class="contact-box">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="title-box">
              <h2>Contact with us</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 col-sm-12 col-xs-12">
            <div class="contact-block">
              <form>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        required
                        data-error="Please enter your name"
                      />
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <input
                        type="text"
                        placeholder="Your Email"
                        id="email"
                        class="form-control"
                        name="name"
                        required
                        data-error="Please enter your email"
                      />
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <select
                        class="custom-select d-block form-control"
                        id="guest"
                        required
                        data-error="Please select an item in the list."
                      >
                        <option disabled selected>
                          What do you wonder about?*
                        </option>
                        <option value="1">Delivery & receive</option>
                        <option value="2">General question</option>
                        <option value="3">Return goods</option>
                        <option value="4">Shipment terms</option>
                        <option value="5">Shipping</option>
                      </select>
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <select
                        class="custom-select d-block form-control"
                        id="event"
                        required
                        data-error="Please select an item in the list."
                      >
                        <option disabled selected>
                          I Am Attending*
                        </option>
                        <option value="1">All events</option>
                        <option value="2">Wedding ceremony</option>
                        <option value="3">Reception party</option>
                      </select>
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <textarea
                        class="form-control"
                        id="message"
                        placeholder="Your Message"
                        rows="8"
                        data-error="Write your message"
                        required
                      ></textarea>
                      <div class="help-block with-errors"></div>
                    </div>
                    <div class="submit-button text-center">
                      <button class="btn btn-common" id="submit" type="submit">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactScreen;
