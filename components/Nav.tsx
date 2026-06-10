export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-brand">Stop Now</div>
      <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
        <a href="tel:07404437994" className="nav-phone">
          07404 437994
        </a>
        <a
          href="https://wa.me/447404437994"
          className="nav-book"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book via WhatsApp
        </a>
      </div>
    </nav>
  );
}
