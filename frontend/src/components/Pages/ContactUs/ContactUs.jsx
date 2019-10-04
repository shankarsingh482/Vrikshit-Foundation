import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faGlobeAsia
} from '@fortawesome/free-solid-svg-icons';
import request from 'superagent';

import Input from '../../common/Input';
import Button from '../../common/Button';
import './ContactForm.css';
import HorizontalLine from '../../common/horizontalline';
import Blocks from '../../common/Blocks';
import ContactUsContent from './ContactUsContent';

class ContactUs extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      isFormFilledProfile: false
    };
    // this.changeHandler = this.changeHandler.bind(this);
    // this.handleSubmitMessage = this.handleSubmitMessage.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  changeHandler = e => {
    const val = e.target.value;
    this.setState({ [e.target.name]: val });
  };

  handleSubmitMessage(e) {
    e.preventDefault();
    console.log('starting to submit profile');
    console.log('Profile Form appears filled');
    const data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };

    request
      .post('/api/messages')
      .send(data)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err || !res.ok) {
          console.log('Oh no! err');
        } else {
          console.log('Success');
        }
      });
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="container">
        <h1 className="text-center">CONTACT US</h1>
        <div className="row">
          <div className="col-lg-6">
            <h2>Our Address</h2>
            <p>
              We reside where there are junk heaps, To fill the place with
              plants and trees.
            </p>
            <div className="commonAddressFieldsStyle">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span className="commonAddressFieldsStyle">
                Address : H-1 / 105 , III Floor Sector-11 Rohini
              </span>
            </div>
            <div className="commonAddressFieldsStyle">
              <FontAwesomeIcon icon={faPhone} />
              <span className="commonAddressFieldsStyle">
                Phone : +91-7827552596 , +91-9810778582
              </span>
            </div>
            <div className="commonAddressFieldsStyle">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="commonAddressFieldsStyle">
                Email : vrikshitfoundation@gmail.com
              </span>
            </div>
            <div className="commonAddressFieldsStyle">
              <FontAwesomeIcon icon={faGlobeAsia} />
              <span className="commonAddressFieldsStyle">
                website : www.vrikshitfoundation.com
              </span>
            </div>
          </div>
          <div className="col-lg-6">
            <form onSubmit={this.handleSubmitMessage}>
              <div className="row">
                <div className="col-lg-6">
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    className="form-control commonFormFieldsStyle"
                    placeholder="Name"
                    required
                    changeHandler={this.changeHandler}
                  />
                </div>
                <div className="col-lg-6">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    className="form-control commonFormFieldsStyle"
                    placeholder="Email"
                    required
                    changeHandler={this.changeHandler}
                  />
                </div>
              </div>
              <textarea
                id="message"
                name="message"
                type="textarea"
                value={message}
                className="form-control commonFormFieldsStyle minHeight"
                placeholder="Message"
                required
                onChange={this.changeHandler}
              />
              <Button
                type="submit"
                className="btn btn-primary commonFormFieldsStyle"
                name="submitContact"
                value="Send Message"
              />
            </form>
          </div>
        </div>
        <div id="fh5co-services-section">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
              <h3>Our Branches</h3>
            </div>
          </div>
          <HorizontalLine className="hr_style" />

          <div className="row text-center">
            <Blocks
              columnLayout="col-md-4 col-sm-4"
              blockLayout="services animate-box"
              allData={ContactUsContent}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
