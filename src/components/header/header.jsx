import React from 'react';
import {
  BrowserRouter ,
} from 'react-router-dom';
import './header.css'
import logo from '../../assests/logo/homePageicon.jpg'
import NavBar from './navBar';
import {NavBarData,TopHeaderLink,SocialMedia } from './headerData';
class Header extends React.PureComponent{

render() {
  return(
    <BrowserRouter>
      <NavBar SocialMedia={SocialMedia} TopHeaderLink ={TopHeaderLink} />
			<div className="container nav_design">
         <div className="row">
            <div className="col-md-6 col-sm-6">
              <a href="#" className="navbar-brand">
                 <img className="logo_design" src ={logo} alt="Vrikshit Foundation"/>
             </a>
         </div>
    <div className="col-md-6 col-sm-6">
      <ul class="sf-menu menu_style" id="fh5co-primary-menu">
			{NavBarData.map(p => <li className="active"><a className="menu_style" href="index.html">{p.navBar}</a></li>)}
      </ul>
    </div>
  </div>
</div>

</BrowserRouter >
  )
}
}


export default Header;
