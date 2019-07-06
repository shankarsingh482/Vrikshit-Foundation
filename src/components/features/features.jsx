import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './features.css';
import {featureData} from './featureData'

class Feature extends React.Component{
  render (){
    return (<>
<div id="fh5co-features">
			<div class="container">
			 	<div class="row">
         {featureData.map(p =>
				  	<div class="col-md-4">
					  	<div class="feature-left">
							 <span class="icon icon-size">
							  	<FontAwesomeIcon icon={p.iconName}/>
						  	</span>
						       	<div class="feature-copy">
							       	<h3>{p.headline}</h3>
							        	<p>{p.details}</p>
						           		<p><a href="#">Learn More</a></p>
						      	</div>
					 	</div>
					</div>
         )}
			</div>
</div>
</div>

    </>
    )
  }
}
export default Feature
