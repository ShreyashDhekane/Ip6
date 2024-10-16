import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <input type="text" id="message" name="message"  required></input>
        </div>
        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;