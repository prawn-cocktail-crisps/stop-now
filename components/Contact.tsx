export default function Contact() {
  return (
    <section
      className="section"
      id="contact"
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="inner">
        <p className="section-label">Get in touch</p>
        <h2>Arrange Your Free Chat</h2>
        <p>
          In the first instance please contact us below to arrange a free
          no-obligation chat to see if the STOP program suits you. I can help you
          get to the top.
        </p>

        <div className="contact-options">
          <a
            href="https://wa.me/447404437994"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-icon">💬</span>
            <div className="contact-text">
              <strong>WhatsApp</strong>
              <span>Message us on WhatsApp — quickest response</span>
            </div>
          </a>
          <a href="tel:07404437994" className="contact-link">
            <span className="contact-icon">📞</span>
            <div className="contact-text">
              <strong>Call: 07404 437994</strong>
              <span>Speak directly with Paul Kay DHP</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
