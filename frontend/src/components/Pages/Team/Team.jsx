import React from 'react';
import './team.css';
import { teamContentData } from './teamContent';
class Team extends React.PureComponent {
  render() {
    return (
      <div>
        <section id="team" class="pb-5">
          <div class="container">
            <h5 class="section-title h1">OUR TEAM</h5>
            <div class="row">
              {teamContentData.map(data => (
                <div class="col-xs-12 col-sm-6 col-md-4">
                  <div
                    class="image-flip"
                    ontouchstart="this.classList.toggle('hover');"
                  >
                    <div class="mainflip">
                      <div class="frontside">
                        <div class="card">
                          <div class="card-body text-center">
                            <p>
                              <img
                                class=" img-fluid img-fluid-pd"
                                src={data.image}
                                alt="card image"
                              />
                            </p>
                            <h4 class="card-title">{data.volunteer_name}</h4>
                            <p class="card-text">{data.volunteer_summary}</p>
                          </div>
                        </div>
                      </div>
                      <div class="backside">
                        <div class="card">
                          <div class="card-body text-center mt-4">
                            <h4 class="card-title">{data.volunteer_name}</h4>
                            <p class="card-text">
                              {data.volunteer_description}
                            </p>
                            <ul class="list-inline">
                              <li class="list-inline-item">
                                <a
                                  class="social-icon text-xs-center"
                                  target="_blank"
                                  href="#"
                                >
                                  <i class="fa fa-facebook"></i>
                                </a>
                              </li>
                              <li class="list-inline-item">
                                <a
                                  class="social-icon text-xs-center"
                                  target="_blank"
                                  href="#"
                                >
                                  <i class="fa fa-twitter"></i>
                                </a>
                              </li>
                              <li class="list-inline-item">
                                <a
                                  class="social-icon text-xs-center"
                                  target="_blank"
                                  href="#"
                                >
                                  <i class="fa fa-skype"></i>
                                </a>
                              </li>
                              <li class="list-inline-item">
                                <a
                                  class="social-icon text-xs-center"
                                  target="_blank"
                                  href="#"
                                >
                                  <i class="fa fa-google"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Team;
