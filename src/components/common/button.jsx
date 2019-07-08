import React from 'react';
import {
  Link,
  BrowserRouter
} from 'react-router-dom'
const Button = ({description,classNames}) =>{
  //const {description} = descriptionValue;
  return (
  <BrowserRouter><div class="row">
  <div class="col-md-4 col-md-offset-4 text-center animate-box">
  <Link to="/gallery" className={classNames}>{description}</Link>
  </div>
  </div>
  </BrowserRouter>
  )
}


export default Button;
