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
              width="1200"
              height="675"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default JoinVrikshit;
