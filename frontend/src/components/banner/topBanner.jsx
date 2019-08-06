
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import firstBanner from '../../assests/banner/1.png'
import secondBanner from '../../assests/banner/2.jpg'
import thirdBanner from '../../assests/banner/3.jpg'
import './topBanner.css';
/**
 * context:
 * Context provides a way to pass data through the component tree
 * without having to pass props down manually at every level.
 *
 */

class TopBanner extends React.Component{
  constructor(props,context)
  {
    super(props,context);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      index:0,
      direction:null
    };
  }
  handleSelect(selectIndex,e) {
    this.setState({
      index:selectIndex,
      direction:e.direction
    })
  }
  render() {
    const {index,direction} = this.state
      return (
        <div className="container-fluid">
        <div className="row">
           <div className="col-lg-12 col-sm-12 p0 m0">
        <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
         >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={firstBanner}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Vrikshit Foundation</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={secondBanner}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Vrikshit Foundation</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={thirdBanner}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
            Vrikshit Foundation
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      </div>
      </div>
    );
  }

}

export default TopBanner;
