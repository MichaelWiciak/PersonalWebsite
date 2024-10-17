import React, { useRef, useState } from "react";
import "./contact.css";
import InstagramIcon from "../../assets/InstagramLogo.png";
import LinkedIn from "../../assets/linkedin.png";
import GitHubIcon from "../../assets/GitHub.png";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

export const Contact = () => {
  const form = useRef();
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const onCaptchaChange = (value) => {
    console.log("Captcha value:", value);
    setCaptchaVerified(!!value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!captchaVerified) {
      alert("Please verify you are not a robot!");
      return;
    }

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

  const redirectGitHub = () => {
    window.location.href = "https://github.com/MichaelWiciak";
  };
  const redirectLinkedIn = () => {
    window.location.href = "https://www.linkedin.com/in/michael-wiciak1/";
  };
  const redirectInstagram = () => {
    window.location.href = "https://www.instagram.com/wiciakmichael/";
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

          <ReCAPTCHA
            sitekey="6LeIPmQqAAAAAHPfOb7Ob1a0uH2THiaTUrsvMbdr"
            onChange={onCaptchaChange}
          />

          <button
            type="submit"
            value="Send"
            className="submitBtn"
            disabled={!captchaVerified}
          >
            Submit
          </button>

          <div className="links">
            <img
              src={GitHubIcon}
              alt=""
              className="link"
              onClick={redirectGitHub}
            />
            <img
              src={LinkedIn}
              alt=""
              className="link"
              onClick={redirectLinkedIn}
            />
            <img
              src={InstagramIcon}
              alt=""
              className="link"
              onClick={redirectInstagram}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
