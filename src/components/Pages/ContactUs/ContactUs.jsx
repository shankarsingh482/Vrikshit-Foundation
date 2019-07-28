import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faGlobeAsia } from '@fortawesome/free-solid-svg-icons';
import Input from '../../common/Input';
import Button from '../../common/Button';
import './ContactForm.css';

class ContactUs extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }
  changeHandler = (e) => {
    const val = e.target.value;
    this.setState({ [e.target.name]:val })
  }
  render() {
    const {name, email, message} = this.state;
    return (
      <div className="container">
        <h1 className="text-center">CONTACT US</h1>
        <div className="row">
          <div className="col-lg-6">
            <h2>Our Address</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className="commonAddressFieldsStyle">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span className="commonAddressFieldsStyle">Address</span>
            </div>
            <div className="commonAddressFieldsStyle">
              <FontAwesomeIcon icon={faPhone} />
              <span className="commonAddressFieldsStyle">Phone</span>
            </div>
            <div className="commonAddressFieldsStyle">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="commonAddressFieldsStyle">Email</span>
            </div>
            <div className="commonAddressFieldsStyle">
              <FontAwesomeIcon icon={faGlobeAsia} />
              <span className="commonAddressFieldsStyle">website</span>
            </div>
          </div>
          <div className="col-lg-6">
            <form action="#" method="post">
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
      </div>
    )
  }
}

export default ContactUs;
