import React from 'react';
import './team.css';
import Banner from '../../common/Banner';
import Paginationmain from './Paginationmain';
import Breadcrumb from '../../common/BreadCrumb';

class Team extends React.PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className="teamContainer">
          <Banner
            bannerImage="teamCover"
            pageDescription="Team Members"
            quotes="Together we are Stronger"
          />
          <Breadcrumb second="Team" />
        </div>
        <Paginationmain />
      </>
    );
  }
}

export default Team;
