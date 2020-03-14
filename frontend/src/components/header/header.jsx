import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../assests/logo/homePageicon.jpg';
import NavBar from './navBar';
import { NavBarData, TopHeaderLink, SocialMedia } from './headerData';

class Header extends React.PureComponent {
  isMobile = window.innerWidth <= 768;
  appContainer = React.createRef();
  state = { navOpen: true };
  componentDidMount() {
    document.addEventListener('mousedown', this.handleMenuClick);
  }
  componentDidUpdate() {
    this.setState({
      navOpen: true
    });
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleMenuClick);
  }
  handleMenuClick = event => {
    if (
      this.isMobile &&
      this.appContainer.current &&
      !this.appContainer.current.contains(event.target)
    ) {
      setTimeout(
        () =>
          this.setState({
            navOpen: false
          }),
        1
      );
    }
  };
  handleButtonClick = () => {
    this.setState({
      navOpen: true
    });
  };
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <NavBar SocialMedia={SocialMedia} TopHeaderLink={TopHeaderLink} />
        <div className="container nav_design">
          <div className="row">
            <div className="col-lg-3 col-sm-2">
              <Link to="/" className="navbar-brand">
                <img
                  className="logo_design"
                  src={logo}
                  alt="Vrikshit Foundation"
                />
              </Link>
            </div>
            <div className="navbar-header" ref={this.appContainer}>
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#myNavbar"
                onClick={this.handleButtonClick}
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="col-lg-9 col-sm-10 allMenu">
              {this.state.navOpen && (
                <div className="collapse navbar-collapse" id="myNavbar">
                  <ul className="nav navbar-nav" id="fh5co-primary-menu">
                    {NavBarData.map(p => (
                      <li className="active" key={p.id}>
                        <Link to={p.path} className="menu_style">
                          {p.navBar}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
