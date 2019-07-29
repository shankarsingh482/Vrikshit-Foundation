import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NavBar extends React.Component {
  render() {
    const { TopHeaderLink, SocialMedia } = this.props;
    return (
      <div className="nav_above_design">
        <div className="row">
          <div className="col-lg-6 col-sm-6">
            {TopHeaderLink.map(p => (
              <a
                href={p.TopHeaderLink}
                key={p.id}
                className="social_icon_position"
              >
                {p.TopHeaderLinkName}
              </a>
            ))}
          </div>
          <div className="col-lg-6 col-sm-6 socialIconMob text-right">
            {SocialMedia.map(p => (
              <a href={p.link} key={p.id} className="social_icon_position">
                <FontAwesomeIcon icon={p.IclassName} />
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
