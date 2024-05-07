import React, { useState } from "react";
import "./ContactForm.css";
import axios from 'axios';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const [focus, setFocus] = useState(false);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = (e) => {
    if (e.target.value === "") {
      setFocus(false);
    }
  };


  const [fullName, setFullName] = useState()
  const [email, setEmail] = useState()
  const [phoneNumber, setPhoneNumber] = useState()
  const [message, setMessage] = useState()



  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/api/contact', {fullName ,email ,phoneNumber , message})
    .then(result => console.log(result) )
    toast.success('Message sent')
    .catch(err => console.log(err))
    
}


  return (
    <div className="container">
      <span className="big-circle"></span>
      <img src="./shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Fell free to ask or if you have any request and will response to you as soon as possible
          </p>

          <div className="info">

              <div className="information">
                <img src="./location.png" className="icon" alt="" />
                <p><a href="https://maps.app.goo.gl/M2JkAZSZCKvdbZFz5" style={{ color: 'inherit', textDecoration: 'none' }}>Jezzine, Saidoun</a></p>
              </div>

              <div className="information">
                <img src="./email.png" className="icon" alt="" />
                <p><a href="mailto:basbalady.support@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>basbalady.support@gmail.com</a></p>
              </div>

              <div className="information">
                <img src="./phone.png" className="icon" alt="" />
                <p><a href="tel:+96170616538" style={{ color: 'inherit', textDecoration: 'none' }}>+961 70 - 616 538</a></p>
              </div>


          </div>

          <div className="social-media">
            <p>Connect with us :</p>
              <div className="social-icons">
                <a href="https://www.facebook.com">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>

          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="POST" autoComplete="off"  onSubmit={handleSubmit}>
            <h3 className={`title ${focus ? "focus" : ""}`}>Contact us</h3>
            <div className="input-container">
              <input
                type="text"
                name="name"
                placeholder="fullName"
                className="input"
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={fullName} onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="input-container">
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input"
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={email} onChange={(e) => setEmail(e.target.value)}
              />
              
            </div>
            <div className="input-container">
              <input
                type="tel"
                name="phone"
                placeholder="phoneNumber"
                className="input"
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="input-container textarea">
              <textarea
                name="message"
                className="input"
                placeholder="message"
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={message} onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
