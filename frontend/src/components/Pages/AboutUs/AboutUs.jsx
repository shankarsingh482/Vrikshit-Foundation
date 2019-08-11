import React from 'react';
import './AboutUs.css';
import Team from '../../common/Team';
import Banner from '../../common/Banner';
import { AboutUsData } from './AboutUSData';
import Button from '../../common/Button';
class AboutUs extends React.PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Banner pageDescription="About Us" quotes="what describe us" />
        <div className="bread-bar">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-8">
                <ol className="breadcrumb">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li className="active">About Us</li>
                </ol>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-4"></div>
            </div>
          </div>
        </div>
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
              <Button
                type="submit"
                className="btn btn-primary btn-lg"
                name="submitContact"
                value="See More"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
