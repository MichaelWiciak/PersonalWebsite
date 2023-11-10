import React, { useRef } from "react";
import "./contact.css";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YoutubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k8z3buy",
        "template_tsw1dhp",
        form.current,
        "_czlJoON27yt30HVF"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Message Sent, I will get back to you shortly", result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill the form below to contact me
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Your Name..."
            className="name"
            name="your_name"
          />
          <input
            type="email"
            placeholder="Your Email..."
            className="email"
            name="your_email"
          />
          <textarea
            placeholder="Your Message..."
            className="message"
            rows="5"
            name="message"
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
