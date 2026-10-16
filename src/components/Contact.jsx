function Contact() {
  return (
    <footer className="contact-section" id="contact">
      <div className="section-heading">
        <p className="eyebrow">Let&apos;s connect</p>
        <h2>Contact me</h2>
      </div>

      <form
        className="contact-form"
        action="https://formspree.io/f/xrperder"
        method="POST"
      >
        <input type="hidden" name="_subject" value="New portfolio contact message" />
        <div className="field-row">
          <label>
            <span>Name</span>
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="_replyto" placeholder="you@example.com" required />
          </label>
        </div>

        <label>
          <span>Message</span>
          <textarea name="message" rows="5" placeholder="Tell me about your project..." required />
        </label>

        <button type="submit" className="primary-btn submit-btn">Send message</button>
      </form>
    </footer>
  )
}

export default Contact
