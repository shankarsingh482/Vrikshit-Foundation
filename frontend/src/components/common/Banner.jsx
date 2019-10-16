import React from 'react';
import './common.css';

const Banner = props => {
  const { bannerStyle, pageDescription, quotes } = props;
  return (
    <div className={`cover ${bannerStyle}`}>
      <h1 className="bannerHeading1">{pageDescription}</h1>
      <h1 className="bannerHeading2">{quotes}</h1>
    </div>
  );
};
export default Banner;
