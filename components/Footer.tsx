export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">Stop Now</div>
      <div className="footer-links">
        <a
          href="https://wa.me/447404437994"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp +44 7404 437994
        </a>
      </div>
      <p className="footer-copy">
        © {new Date().getFullYear()} Stop Now. All rights reserved. Terms &amp; Conditions available on request.
      </p>
    </footer>
  );
}
