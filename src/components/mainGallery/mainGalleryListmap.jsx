import React from 'react';


class MainGalleryMap extends React.Component{
  render(){
    const {mainGalleryData} = this.props;
    return (<>
      {mainGalleryData.map(p =>
            <li className={p.className} data-animate-effect="fadeIn">
            <a href="#" class="color-3">
              <div class="case-studies-summary">
                <span>{p.subHeading}</span>
                <h2>{p.mainHeading}</h2>
              </div>
            </a>
          </li>
        )}

    </>
    )
  }
}




export default MainGalleryMap;
