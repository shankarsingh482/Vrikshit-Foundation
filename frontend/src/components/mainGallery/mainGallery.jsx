import React from 'react';
import { Link } from 'react-router-dom';
import './mainGallery.css';
import MainGalleryListmap from './mainGalleryListmap';
import { mainGalleryData } from './mainGalleryData';
import HorizontalLine from '../common/horizontalline';
class MainGallery extends React.Component {
  render() {
    return (
      <div id="fh5co-portfolio">
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
                <MainGalleryListmap mainGalleryData={mainGalleryData} />
              </ul>
            </div>
          </div>
            <div className="row">
              <div className="col-md-4 col-md-offset-4 text-center animate-box">
                <Link to="/gallery" className="btn btn-primary btn-lg">
                  See Gallery
                </Link>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default MainGallery;
