import React from 'react';
import Pagination from './Pagination';
import {teamContentData} from './teamContent';

class PaginationMain extends React.Component {
  constructor() {
      super();

      // an example array of items to be paged
      var exampleItems = teamContentData;

      this.state = {
          exampleItems: exampleItems,
          pageOfItems: exampleItems.slice(0,10),
      };

      // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
      this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageNum) {
      // update state with new page of items
      this.setState({ pageOfItems: pageNum});
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
      return (
          <div>
          <section id="team" class="pb-5">
          <div class="container">
            <h5 class="section-title h1">OUR TEAM</h5>
            <div class="row">
              {this.state.pageOfItems.map(data => (
                <div class="col-xs-12 col-sm-6 col-md-4">
                  <div class="image-flip">
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
        <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
                  </div>
      );
  }
}

export default PaginationMain;
