import React from 'react';
import { Link } from 'react-router-dom';
import './common.css';

const Breadcrumb = ({ second, third, secondRoute }) => {
  return (
    <div className="bread-bar">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-8">
            <ol className="breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              {third ? (
                <li>
                  <Link to={`/${secondRoute}`}>{second}</Link>
                </li>
              ) : (
                <li className="active">{second}</li>
              )}
              {third && <li className="active">{third}</li>}
            </ol>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-4"></div>
        </div>
      </div>
    </div>
  );
};
export default Breadcrumb;
