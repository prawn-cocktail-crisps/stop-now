const features = [
  "We offer a half-day one-to-one counselling session conducted online via video",
  "The session is tailored to your circumstances and specific to you",
  "We offer a full money-back guarantee if you do not end the session as a confident non-drinker",
  "Our follow-up includes a summary of our beliefs, and the key points from the session by email",
  "We are a global service and can adjust our timing to suit most time zones",
  "We are 100% confidential and require no personal details from you",
  "Sessions conducted in English",
  "We use PayPal for our invoices. Pay in any currency",
];

export default function Pricing() {
  return (
    <section className="section">
      <div className="section-inner">
        <p className="eyebrow">Pricing</p>
        <h2>Simple, transparent pricing</h2>
        <div className="pricing-card">
          <div className="price-row">
            <span className="price-main">£249</span>
            <span className="price-was">£499</span>
          </div>
          <p className="price-note">50% introductory offer · Pay via PayPal</p>
          <ul className="features">
            {features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <a
            href="https://wa.me/447404437994"
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Message us to book →
          </a>
        </div>
      </div>
    </section>
  );
}
