import React from 'react';
import './supportus.css';
import HorizontalLine from '../common/horizontalline';
import Blocks from '../common/Blocks';
import SupportUsContent from './suppostUsContent';

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
            <Blocks
              columnLayout="col-md-4 col-sm-4"
              blockLayout="services animate-box"
              allData={SupportUsContent}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Support;
