import React from 'react';
import './Media.css';
import { MediaContentData } from './MediaContent';
import Banner from '../../common/Banner';
import Breadcrumb from '../../common/BreadCrumb';

class Media extends React.Component {

  componentDidMount(){
    window.scrollTo(0,0);
  }

  render() {
    return (
      <>
        <div className="headerContainer">
          <Banner
            bannerImage="mediaBanner"
            pageDescription="Media Coverage"
            quotes="You can find us in media"
          />
          <Breadcrumb second="Media" />
        </div>
        <h2 align="center" className="heading_news">
          Vrikshit In the News
        </h2>
        <div className="container">
          <div className="row">
            {MediaContentData.map(data => (
              <div className="col-md-4 newsbox">
                <div className="row">
                  <div className="col-xs-12">
                    <img src={data.profileimg} />
                    <p className="news_description">
                      <a href={data.url} target="_blank">
                        {data.description}
                      </a>
                      <h2 className="date_heading">{data.date}</h2>
                    </p>
                  </div>
                  <div className="col-xs-12 news_description">
                    <img
                      className="image_news"
                      src={data.newspaper_description}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
export default Media;
