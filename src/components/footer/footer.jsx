import React from 'react';
import './footer.css';
import HorizontalLine from '../common/horizontalline';

const Footer = () => {
  return (
    <div>
      <HorizontalLine className="hr_style" />
      <p className="footer-text">&copy;2019 Vrikshit Foundation</p>
    </div>
  )
};

export default Footer;
