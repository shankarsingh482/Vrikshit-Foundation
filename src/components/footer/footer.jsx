import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.css';
import { SocialMedia } from './footerData';

const Footer = () => {
  return (
    <div className="text-center footer">
      {SocialMedia.map(p => (
        <a href={p.link} key={p.id} target="_blank" className='footerSocialIcon'>
          <FontAwesomeIcon size='2x' icon={p.IclassName} />
        </a>
      ))}
      <span className="copyrightText">&copy;2019 Vrikshit Foundation</span>
    </div>
  );
};

export default Footer;
