import React from 'react';
import SocialIcons from './socialIcons';
const Team = (props) => {
  const {profileimg,name,description} = props;
  return(
  <React.Fragment>
    <img src={profileimg} />
    <div className="team-content">
      <h3>{name}</h3>
       <div className="border-team"></div>
      <p><b>
        {description}
      </b></p>
     <SocialIcons/>
  </div>
  </React.Fragment>
  )

}

export default Team;
