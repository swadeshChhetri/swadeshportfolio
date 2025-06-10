import React from "react";
import Lottie from "lottie-react";
import Contact from "../../../public/Contact.json";
import "./contact.css";

const ContactSection = () => {
  return (
    <section  id="contact">
      <h2 className="gf_h2 heading">
        <i className="bi bi-telephone-outbound-fill"></i>
        Let's<span>Connect</span>
      </h2>
      <div className="box">
        <div className="svg">
          <Lottie
            animationData={Contact}
            data-aos="fade-right"
            data-aos-duration="1500"
          />
        </div>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <input
            type="hidden"
            name="access_key"
            value="a0cec677-5b58-4dfd-9428-5b010453488c"
          />
          <div className="input-box">
            <input type="text" name="name" placeholder="Full Name" />
            <input type="text" name="email" placeholder="Email Address" />
          </div>
          <div className="input-box">
            <input type="number" name="mobile" placeholder="Mobile Number" />
            <input type="text" name="subject" placeholder="Email subject" />
          </div>
          <textarea
            name="message"
            id="#"
            cols="30"
            rows="8"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="btnn">
            Submit<i className="bi bi-send-fill"></i>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
