import React from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';
import { GalleryData } from './GalleryData';
import HorizontalLine from '../../common/horizontalline';

class Gallery extends React.PureComponent {
  render() {
    return (
      <div className="galleryContainer">
        <div className="galleryBanner">
          <h1 className="galleryBannerHeading1">Gallery</h1>
          <h1 className="galleryBannerHeading2">
            We wish to bring many good things to life.
          </h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center heading-section animate-box">
              <h1 className="h3_gallery_heading">Our Gallery</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
                est facilis maiores, perspiciatis accusamus asperiores sint
                consequuntur debitis.
              </p>
              <HorizontalLine className="hr_style" />
            </div>
          </div>

          <div className="row row-bottom-padded-md">
            <div className="col-md-12">
              <ul id="fh5co-portfolio-list">
                {GalleryData.map(p => (
                  <li
                    className={p.className}
                    key={p.id}
                    data-animate-effect="fadeIn"
                  >
                    <Link to={p.path} className="color-3">
                      <div className="case-studies-summary">
                        <span>{p.subHeading}</span>
                        <h2>{p.mainHeading}</h2>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
