
import "../styles/contactForm.css";

const ContactForm = () => {
  return (
    <section className="contact-form">
      <h3>Do you have a question or feedback?</h3>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
