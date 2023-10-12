import React from "react";
import "./contact.css";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YoutubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import Walmart from "../../assets/walmart.png";
import Microsoft from "../../assets/microsoft.png";
import Adobe from "../../assets/adobe.png";
import Facebook from "../../assets/facebook.png";

export const Contact = () => {
  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill the form below to contact me
        </span>
        <form className="contactForm">
          <input type="text" placeholder="Your Name..." className="name" />
          <input type="email" placeholder="Your Email..." className="email" />
          <textarea
            placeholder="Your Message..."
            className="message"
            rows="5"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={FacebookIcon} alt="" className="link" />
            <img src={TwitterIcon} alt="" className="link" />
            <img src={YoutubeIcon} alt="" className="link" />
            <img src={InstagramIcon} alt="" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
