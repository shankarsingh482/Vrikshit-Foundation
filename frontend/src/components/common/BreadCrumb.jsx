import React from 'react';
import { Link } from 'react-router-dom';
import './common.css';

const Breadcrumb = ({ second, third, secondRoute }) => {
  return (
    <div className="bread-bar">
      <div className="container">
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
    </div>
  );
};
export default Breadcrumb;
