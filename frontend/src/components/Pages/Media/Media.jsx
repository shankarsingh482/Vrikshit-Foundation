import React from 'react';
import { Link } from 'react-router-dom';
import './Media.css';
import { MediaContentData } from './MediaContent';
import Banner from '../../common/Banner';
import Breadcrumb from '../../common/BreadCrumb';

class Media extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
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
        <div className="newsCollection">
          {MediaContentData.map(data => (
            <div className="newsbox" key={data.id}>
              <div className="newsBoxTop">
                <div className="newsBoxTopImage">
                  <img src={data.profileimg} alt={data.description} />
                </div>
                <div className="newsBoxTopContent">
                  <p className="news_description">
                    <Link to={data.url} target="_blank" rel="noopener noreferrer">
                      {data.description}
                    </Link>
                  </p>
                  <p className="date_heading">{data.date}</p>
                </div>
              </div>
              <div className="newsBoxBottom">
                <img
                  src={data.newspaper_description}
                  alt={data.description}
                />
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}
export default Media;

