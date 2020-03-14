import React from 'react';
import './Media.css';
import { MediaContentData } from './MediaContent';
class Media extends React.Component {

  componentDidMount(){
    window.scrollTo(0,0);
  }

  render() {
    return (
      <>
        <h2 align="center" class="heading_news">
          Vrikshit In the News
        </h2>
        <div class="container">
          <div class="row">
            {MediaContentData.map(data => (
              <div class="col-md-4 newsbox">
                <div class="row">
                  <div class="col-xs-12">
                    <img src={data.profileimg} />
                    <p class="news_description"><a href={data.url} target="_blank">{data.description}</a><h2 class="date_heading">{data.date}</h2></p>
                  </div>
                  <div class="col-xs-12 news_description"><img class='image_news' src ={data.newspaper_description}/></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
export default Media;
