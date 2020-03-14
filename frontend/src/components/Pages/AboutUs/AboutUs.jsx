import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';
import Team from '../../common/Team';
import Banner from '../../common/Banner';
import { AboutUsData } from './AboutUSData';
import Breadcrumb from '../../common/BreadCrumb';

class AboutUs extends React.PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="aboutContainer">
        <Banner
          bannerImage="aboutBanner"
          pageDescription="About Us"
          quotes="what describe us"
        />
        <Breadcrumb second="About Us" />
        <div className="aboutus-secktion paddingTB60">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="strong">
                  Who we are and
                  <br />
                  what we do
                </h1>
                <p className="lead">
                  Best NGO in Delhi
                  <br />
                </p>
              </div>
              <div className="col-md-6 aboutusDescription">
                <p>
                  This is an NGO (vrikshit foundation), started for the cleaner
                  and healthier delhi and i am the part of it as an organiser.
                  Vrikshit Foundation is a Delhi based voluntary organization
                  conducting cleanliness drives, environment protection and
                  awareness programs.
                </p>
                <p>
                  We are a group of motivated individuals who want to achieve
                  the dream of Clean Delhi Green Delhi. Our enthusiastic
                  volunteers take up cleanliness drives at various locations to
                  motivate people in maintaining a spotless environment. We are
                  also setting up ties with higher authorities to raise the
                  voices of common and poor people who suffer from hazardous
                  sanitary conditions. We are very actively working towards
                  cleaning the Yamuna River and we organize regular cleaning
                  campaigns every weekend.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container team-sektion paddingTB60">
          <div className="row">
            <div className="site-heading text-center">
              <h3>Our Team</h3>
              <p>
                Pillars Behind Vrikshit Foundation , Young mind who want clean
                and green Delhi.
              </p>
              <div className="border"></div>
            </div>
          </div>
          <div className="row">
            {AboutUsData.map(data => (
              <div className="col-md-4 team-box">
                <div className="team-img thumbnail">
                  <Team
                    name={data.name}
                    description={data.description}
                    profileimg={data.profileimg}
                  />
                </div>
              </div>
            ))}
          </div>
          <div class="row">
            <div class="col text-center">
              <Link to="/teamInformation" className="btn btn-primary btn-lg">
                See More
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
