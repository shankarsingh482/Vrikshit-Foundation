import React from 'react';
import {
  BrowserRouter ,
  Link
} from 'react-router-dom';
import './header.css'
import logo from '../../assests/logo/homePageicon.jpg'
import NavBar from './navBar';
import {NavBarData,TopHeaderLink,SocialMedia } from './headerData';
class Header extends React.PureComponent{

render() {
return(
    <BrowserRouter>
    <div className="navbar-fixed-top">
      <NavBar SocialMedia={SocialMedia} TopHeaderLink ={TopHeaderLink} />
			<div className="container nav_design">
         <div className="row">
            <div className="col-md-6 col-sm-6">
              <a href="#" className="navbar-brand">
                 <img className="logo_design" src ={logo} alt="Vrikshit Foundation"/>
             </a>
         </div>
    <div className="col-md-6 col-sm-6">
      <ul className="sf-menu menu_style " id="fh5co-primary-menu">
			{NavBarData.map(p => <li className="active" key={p.id}><Link to={p.path} className="menu_style">{p.navBar}</Link></li>)}
      </ul>
    </div>
  </div>
</div>
</div>

</BrowserRouter >
  )
}
}


export default Header;
