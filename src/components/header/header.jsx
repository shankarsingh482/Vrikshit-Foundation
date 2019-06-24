import React from 'react';
import {
  NavLink,
  BrowserRouter ,
} from 'react-router-dom';
import styles from './header.css';
import classnames from 'classnames'

class Header extends React.PureComponent{

render() {

  return(
    <BrowserRouter >
<header>
    <div clas="conatiner">
      <div class="nav-header">
      <a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle dark"><i></i></a>
					<h1 id="fh5co-logo"><a href="index.html">Vrikshit Foundation</a></h1>
      </div>
    </div>
    <ul className={classnames(styles.header)}>
            <li><NavLink to="/">Vrikshit Foundation</NavLink></li>
            <li><NavLink to="/aboutus">About Us</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
          </ul>
</header>
</BrowserRouter >
  )
}




}


export default Header;
