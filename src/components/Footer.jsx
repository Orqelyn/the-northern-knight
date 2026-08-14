import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand" data-reveal="up">
          <span className="footer__logo-text">THE NORTHERN KNIGHT</span>
          <p className="footer__tagline">
            A quiet blade in the frozen north, protecting those who have no sword of their own.
          </p>
        </div>

        <div className="footer__divider" data-reveal="fade" data-reveal-delay="150"></div>

        <div className="footer__bottom" data-reveal="up" data-reveal-delay="200">
          <p className="footer__copyright">
            © {new Date().getFullYear()} The Northern Knight. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
