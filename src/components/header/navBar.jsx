import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class NavBar extends React.Component{
  render(){
    const {TopHeaderLink,SocialMedia} = this.props;
    return (
    <div className="container nav_above_design">
     <div className="row">
       <div className="col-md-6 col-sm-6">
         {TopHeaderLink.map(p => <a href={p.TopHeaderLink} className="nav_above_text_position">{p.TopHeaderLinkName}</a>)}
       </div>
        <div className="col-md-6 col-sm-6 text-right social social_icon_style">
          {SocialMedia.map(p => <a href={p.link} className="social_icon_position"><FontAwesomeIcon icon ={p.IclassName}/></a>)}
      </div>
    </div>
  </div>
    )
  }
}


export default NavBar;
