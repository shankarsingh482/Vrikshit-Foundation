import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './features.css';
import {featureData} from './featureData'

class Feature extends React.Component{
  render (){
    return (
<div id="fh5co-features">
			<div className="container">
			 	<div className="row">
         {featureData.map(p =>
				  	<div className="col-md-4" key={p.id}>
					  	<div className="feature-left">
							 <span className="icon icon-size">
							  	<FontAwesomeIcon icon={p.iconName}/>
						  	</span>
								<div className="feature-copy">
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
    )
  }
}
export default Feature
