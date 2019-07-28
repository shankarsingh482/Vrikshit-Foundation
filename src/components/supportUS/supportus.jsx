import React from 'react';
import './supportus.css';
import HorizontalLine from '../common/horizontalline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

class Support extends React.Component {
  render() {
    return (
      <div id="fh5co-services-section">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
              <h3>Our Projects. Support Us</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
                est facilis maiores, perspiciatis accusamus asperiores sint
                consequuntur debitis.
              </p>
            </div>
          </div>
          <HorizontalLine className="hr_style" />
        </div>
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 col-sm-4">
              <div className="services animate-box">
                <span>
                  <FontAwesomeIcon icon={faHeart} />
                </span>
                <h3>Water Project In Kenya</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="services animate-box">
                <span>
                  <FontAwesomeIcon icon={faHeart} />
                </span>
                <h3>Shelter Giving</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="services animate-box">
                <span>
                  <FontAwesomeIcon icon={faHeart} />
                </span>
                <h3>Shelter Giving</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="services animate-box">
                <span>
                  <FontAwesomeIcon icon={faHeart} />
                </span>
                <h3>Water Project In Kenya</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="services animate-box">
                <span>
                  <FontAwesomeIcon icon={faHeart} />
                </span>
                <h3>Water Project In Kenya</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="services animate-box">
                <span>
                  <FontAwesomeIcon icon={faHeart} />
                </span>
                <h3>Midical Mission</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Support;
