import React from 'react';
import './mainGallery.css';
import MainGalleryListmap from './mainGalleryListmap';
import {mainGalleryData} from './mainGalleryData';
import HorizontalLine from '../common/horizontalline';
import Button from '../common/button';
class MainGallery extends React.Component{

render(){
  return( <div id="fh5co-portfolio">
			<div class="container">
				<div class="row">
					<div class="col-md-6 col-md-offset-3 text-center heading-section animate-box">
						<h1 className="h3_gallery_heading">Our Gallery</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores, perspiciatis accusamus asperiores sint consequuntur debitis.</p>
					<HorizontalLine className="hr_style" />
					</div>
				</div>


				<div class="row row-bottom-padded-md">
					<div class="col-md-12">
						<ul id="fh5co-portfolio-list">
						<MainGalleryListmap mainGalleryData={mainGalleryData}/>
						</ul>
					</div>
				</div>
				<Button description ="See Gallery" classNames = "btn btn-primary btn-lg"/>
        </div>
        </div>
  )
}

}


export default MainGallery;
