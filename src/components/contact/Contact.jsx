import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact_options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>govindrajingle@gmail.com</h5>
            <a href="mailto:govindrajingle@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsMessenger />
            <h4>Messenger</h4>
            <h5>Govindraj Ingle</h5>
            <a href="https://m.me/inglegovindraj">Send a message</a>
          </article>
          <article className="contact__option">
            <BsInstagram />
            <h4>Instagram</h4>
            <h5>govindrajingle</h5>
            <a href="https://www.instagram.com/govindrajingle/">
              Send a message
            </a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form action=""></form>
      </div>
    </section>
  );
};

export default Contact;
