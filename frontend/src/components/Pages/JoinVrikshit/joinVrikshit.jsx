import React from 'react';
import './joinVrikshit.css';

class JoinVrikshit extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="container description_Form">
        <div className="row">
          <div className="col-md-12">
            <h1 className="volunteer_headline">VOLUNTEER WITH US</h1>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScPBGeteil_ggg3pHZaOou7KNEMxf04WgbPKoV43WksmJFzaQ/viewform?embedded=true"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              width="100%"
              height="100%"
              title="Join Vrikshit Team"
            >
              Form is Loading
            </iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default JoinVrikshit;
