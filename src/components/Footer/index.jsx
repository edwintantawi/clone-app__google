import React from 'react';
import './index.css';

const Footer = ({ children }) => {
  return (
    <footer className="footer">
      <section className="footer__top">Indonesia</section>
      <section className="footer__bottom">{children}</section>
    </footer>
  );
};

export default Footer;
