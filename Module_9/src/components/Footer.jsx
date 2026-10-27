import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import Logo from '../assets/Finsweet.svg'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-header">
          <img src={Logo} alt="" />

          <nav className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About us</Link>
            <Link to="/contact">Contact us</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </nav>
        </div>

        <div className="footer-subscribe">
          <h2>
            Subscribe to our news letter to get
            <br />
            latest updates and news
          </h2>

          <form
            className="footer-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter Your Email"
              aria-label="Enter your email"
              required
            />

            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="footer-bottom">
          <div className="footer-contact">
            <p>Finstreet 118 2561 Fintown</p>
            <p>
              Hello@finsweet.com&nbsp; 020 7993 2905
            </p>
          </div>

          <div className="footer-socials">
            <a
              href="https://www.facebook.com/"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm2.2 5.2h-1.5c-.6 0-.7.3-.7.8v1.5h2.1l-.3 2.2H12v5.5H9.7v-5.5H8v-2.2h1.7V7.8c0-1.8 1-2.8 2.7-2.8h1.8v2.2Z" />
              </svg>
            </a>

            <a
              href="https://twitter.com/"
              aria-label="Twitter"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 5.9a8 8 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.3 8.3 0 0 1-2.7 1 4.1 4.1 0 0 0-7 3.7 11.7 11.7 0 0 1-8.5-4.3 4.1 4.1 0 0 0 1.3 5.5 4 4 0 0 1-1.9-.5v.1a4.1 4.1 0 0 0 3.3 4 4 4 0 0 1-1.8.1 4.1 4.1 0 0 0 3.8 2.9A8.3 8.3 0 0 1 2 18.5a11.7 11.7 0 0 0 17.9-9.9v-.5A8.4 8.4 0 0 0 22 5.9Z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.3-3.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.5 18H6V9.5h2.5V18ZM7.2 8.4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM18 18h-2.5v-4.1c0-1 0-2.2-1.3-2.2s-1.5 1-1.5 2.1V18h-2.5V9.5h2.4v1.2a2.7 2.7 0 0 1 2.4-1.4c2.6 0 3 1.7 3 3.9V18Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}