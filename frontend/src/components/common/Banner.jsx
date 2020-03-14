import React from 'react';
import './common.css';

const Banner = props => {
  const { bannerImage, pageDescription, quotes } = props;
  return (
    <div className={bannerImage ? `cover ${bannerImage}` : `cover defaultImage`}>
      <h1 className="bannerHeading1">{pageDescription}</h1>
      <h1 className="bannerHeading2">{quotes}</h1>
    </div>
  );
};
export default Banner;
