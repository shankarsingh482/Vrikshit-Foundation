import React from 'react';
import classnames from 'classnames';
import './Gallery.css';
import HorizontalLine from '../../common/horizontalline';
import Banner from '../../common/Banner';
import Breadcrumb from '../../common/BreadCrumb';
import { allImages, GalleryTabs } from './GalleryData';

class Gallery extends React.PureComponent {
  isMobile = window.innerWidth <= 768;
  currentSlide = 0;
  state = { isModalOpen: false, filterTab: 'All' };
  openModal = e => {
    this.currentSlide = parseInt(e.target.id, 10);
    this.setState({ isModalOpen: true });
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  showNextImage = () => {
    this.currentSlide = this.currentSlide + 1;
  };
  showPrevImage = () => {
    this.currentSlide = this.currentSlide - 1;
  };
  filterTab = e => {
    this.setState({ filterTab: e.target.id });
  };
  render() {
    return (
      <>
        <div
          className="driveContainer"
          aria-label="gallery header"
          tabIndex="0"
        >
          <Banner
            bannerImage="galleryBanner"
            pageDescription="Gallery"
            quotes="We wish to bring many good things to life."
          />
          <Breadcrumb
            second="Gallery"
            secondRoute="gallery"
          />
        </div>
        <h1 className="h3_gallery_heading text-center">Our Gallery</h1>
        <HorizontalLine className="hr_style" />

        <div className="container">
          <div
            className={classnames(this.isMobile ? 'dropdown text-center' : '')}
          >
            {this.isMobile && (
              <button
                className="btn dropdown-toggle drop-label"
                type="button"
                data-toggle="dropdown"
              >
                {this.state.filterTab}
                <span className="caret"></span>
              </button>
            )}
            <ul
              className={classnames(
                this.isMobile ? 'dropdown-menu drop-mobile' : 'galleryFilter'
              )}
              id="gallery"
            >
              {GalleryTabs.map(item => (
                <li
                  id={item.id}
                  key={item.id}
                  onClick={this.filterTab}
                  className={classnames(
                    this.state.filterTab === item.Name ? 'tabActive' : ''
                  )}
                >
                  {item.Name}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="imageContainer"
            aria-label="Gallery All Images"
            id="imageContainer"
            tabIndex="0"
          >
            {allImages.map(item => {
              if (this.state.filterTab === 'All')
                return (
                  <div
                    className="singleImg"
                    key={item.id}
                    onClick={this.openModal}
                  >
                    <img
                      className="commonImage"
                      id={item.id}
                      src={item.image}
                      alt={item.alt}
                    />
                  </div>
                );
              if (item.category === this.state.filterTab)
                return (
                  <div
                    className="singleImg"
                    key={item.id}
                    onClick={this.openModal}
                  >
                    <img
                      className="commonImage"
                      id={item.id}
                      src={item.image}
                      alt={item.alt}
                    />
                  </div>
                );
            })}
          </div>
        </div>
        {this.state.isModalOpen && (
          <div className="modal">
            <span className="close cursor" onClick={this.closeModal}>
              &times;
            </span>
            {allImages.map(item => (
              <div
                className={classnames(
                  'modal-content',
                  this.currentSlide === item.id
                    ? 'modalCurrentSlide'
                    : 'hideSlide'
                )}
                id={item.id}
                key={item.id}
              >
                <img className="modalImage" src={item.image} alt={item.image} />
              </div>
            ))}
            <a
              className={classnames(
                'prev',
                this.currentSlide === 1 ? 'hideSlide' : ''
              )}
              href="#!"
              onClick={this.showPrevImage}
            >
              &#10094;
            </a>
            <a
              className={classnames(
                'next',
                this.currentSlide === allImages.length ? 'hideSlide' : ''
              )}
              href="#!"
              onClick={this.showNextImage}
            >
              &#10095;
            </a>
          </div>
        )}
      </>
    );
  }
}

export default Gallery;
