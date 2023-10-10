import React from 'react'

export const Contact = () => {
  return (
    <section id="contactPage">
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill the form below to contact me</span>
            <form className="contactForm">
                <input type="text" placeholder="Your Name..." className="name" />
                <input type="email" placeholder="Your Email..." className="email" /> 
                <textarea placeholder="Your Message..." className="message" rows="5"></textarea> 
                <button type="submit" value="Send" className="submitBtn">Submit</button>
            </form>

        </div>
    </section>
  )
}

export default Contact
