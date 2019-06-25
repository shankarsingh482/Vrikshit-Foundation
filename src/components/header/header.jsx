import React from 'react';
import {
  Route,
  BrowserRouter ,
} from 'react-router-dom';
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faTwitter , faInstagram} from '@fortawesome/free-brands-svg-icons'
import logo from '../../assests/logo/homePageicon.jpg'
class Header extends React.PureComponent{

render() {

const NavBar = [
  {id:1,navBar:'Home',path:'/',component:'Home'},
  {id:2,navBar:'About Us',path:'/aboutus',component:'AboutUs'},
  {id:3,navBar:'Contact Us',path:'contactus',component:'ContactUs'},
  {id:4,navBar:'Gallery',path:'gallery',component:'Gallery'},
]

const TopHeaderLink = [
  {id:1,TopHeaderLink:'#',TopHeaderLinkName:'FAQ'},
  {id:2,TopHeaderLink:'#',TopHeaderLinkName:'Forum'},
  {id:3,TopHeaderLink:'#',TopHeaderLinkName:'Contact'}
]

const SocialMedia = [
  {id:1,link:"",IclassName:faFacebook},
  {id:2,link:"",IclassName:faTwitter},
  {id:3,link:"",IclassName:faInstagram},
]

  return(
    <BrowserRouter>
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
   <div className="container">
      <div className="row">
           <div className="col-md-6 col-sm-6">
             <a class="navbar-brand" href="#">
            <img className="logo_design" src ={logo} alt="Vrikshit Foundation"/>
            </a>
            </div>
            <div className="col-md-6 col-sm-6">
                 <ul className="header">
                     {NavBar.map(p => <li key={p.id}><Route path={p.path} component={p.component} >{p.navBar}</Route></li>)}
                </ul>
            </div>
     </div>
  </div>

</BrowserRouter >
  )
}




}


export default Header;
