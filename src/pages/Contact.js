 import React, { useRef } from 'react';
 import emailjs from '@emailjs/browser';
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";



  function Contact ()  {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_gy09ql5', 
      'template_2qco4q8',
     form.current,
      'UtPoQ_vpRgaxeGfNY')
      .then((result) => {
          // console.log(result.text);
          // console.log("message sent")
       alert("message sent successfully!!")
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}>
      </div>
      <div className="rightSide">
        <h1> Contact Us</h1>
        <form id="contact-form" ref={form} onSubmit={sendEmail} method="POST">
          <label >Name</label>
          <input type='text' name="user_name" placeholder="Enter full name..." />
          <label >Email</label>
          <input name="user_email" placeholder="Enter email..." type="email" />
          <label >Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
  };
export default Contact;
