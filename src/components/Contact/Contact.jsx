import "./Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
 import emailjs from "@emailjs/browser";
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

 function handleSubmit(e) {
   e.preventDefault();

   emailjs
     .send(
       "service_59tj0sj",
       "template_pa0r2i4",
       {
         from_name: form.name,
         from_email: form.email,
         message: form.message,
       },
       "UzjzjomChzqQFU1oM",
     )
     .then(() => {
       alert("Message Sent Successfully!");

       setForm({
         name: "",
         email: "",
         message: "",
       });
     })
     .catch((error) => {
       console.log(error);
       alert("Failed to send message");
     });
 }

  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Get in Touch</h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Connect With Me</h3>

          <div className="contact-links">
            <a
              href="mailto:bhumikanew21@gmail.com"
              target="_blank"
              className="contact-item"
            >
              <FaEnvelope />
              <span>Email</span>
            </a>

            <a
              href="https://www.linkedin.com/in/bhumika-gupta-84ba7a313/"
              target="_blank"
              className="contact-item"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/BhumikaCoder21"
              target="_blank"
              className="contact-item"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

            <a href="tel:7268932935" className="contact-item">
              <FaPhone />
              <span>Phone</span>
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
