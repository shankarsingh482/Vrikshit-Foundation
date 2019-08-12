import React from 'react';

const Banner = (props) =>{
  const {pageDescription,quotes} = props;
  return(  <div className="galleryBanner">
  <h1 className="galleryBannerHeading1">{pageDescription}</h1>
  <h1 className="galleryBannerHeading2">
   {quotes}
  </h1>
  </div>

  )



}
export default Banner

