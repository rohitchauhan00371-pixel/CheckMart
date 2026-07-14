import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="e-commerce-footer">
  <div className="footer-content">
      <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email-1: checkmart.mail@gmail.com</p>
          <p>Email-2: checkmart.charlies@gmail.com</p>
          <p>Phone: +91 70275-22310</p>
      </div>

      <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="search with code.html">search through code</a></li>
          <li><a href="Terms and Conditions.html">Terms and Conditions</a></li>
          <li><a href="Privacy policy.html">Privacy policy</a></li>
          <li><a href="About Us.html">About Us</a></li>
    </ul>
      </div>

      <div className="footer-section">
          <h3>Stay Connected</h3>
          <p>Follow us on social media:</p>
          <div className="social-icons">
          <a href="https://www.instagram.com/checkmart.in/" target="_blank"><i className="fa-brands fa-square-instagram"></i></a>
          <a href="https://www.youtube.com/@CheckMart-vt7gv" target="_blank"><i className="fa-brands fa-youtube"></i></a>
          <a href="https://t.me/CheckMartindia" target="_blank"><i className="fa-brands fa-telegram"></i></a>
          </div>
      </div>
  </div>

  <div className="footer-bottom">
      © 2023 YourStore. All rights reserved.
  </div>
</footer>
    </div>
  )
}

export default Footer
