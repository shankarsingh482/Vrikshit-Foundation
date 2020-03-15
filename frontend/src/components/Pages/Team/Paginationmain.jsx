import React from 'react';
import Pagination from './Pagination';
import { teamContentData } from './teamContent';

class PaginationMain extends React.Component {
  constructor() {
    super();

    // an example array of items to be paged
    var exampleItems = teamContentData;

    this.state = {
      exampleItems: exampleItems,
      pageOfItems: exampleItems.slice(0, 10)
    };

    // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageNum) {
    // update state with new page of items
    this.setState({ pageOfItems: pageNum });
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <section id="team" className="pb-5">
          <div className="container">
            <h5 className="section-title h1">OUR TEAM</h5>
            <div className="row">
              {this.state.pageOfItems.map(data => (
                <div className="col-xs-12 col-sm-6 col-md-4" key={data.id}>
                  <div className="image-flip">
                    <div className="mainflip">
                      <div className="frontside">
                        <div className="card">
                          <div className="card-body text-center">
                            <p>
                              <img
                                className=" img-fluid img-fluid-pd"
                                src={data.image}
                                alt={data.volunteer_description}
                              />
                            </p>
                            <h4 className="card-title">
                              {data.volunteer_name}
                            </h4>
                            <p className="card-text">
                              {data.volunteer_summary}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="backside">
                        <div className="card">
                          <div className="card-body text-center mt-4">
                            <h4 className="card-title">
                              {data.volunteer_name}
                            </h4>
                            <p className="card-text">
                              {data.volunteer_description}
                            </p>
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <a
                                  className="social-icon text-xs-center"
                                  target="_blank"
                                  href="/#"
                                  rel="noopener noreferrer"
                                >
                                  <i className="fa fa-facebook"></i>
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a
                                  className="social-icon text-xs-center"
                                  target="_blank"
                                  href="/#"
                                  rel="noopener noreferrer"
                                >
                                  <i className="fa fa-twitter"></i>
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a
                                  className="social-icon text-xs-center"
                                  target="_blank"
                                  href="/#"
                                  rel="noopener noreferrer"
                                >
                                  <i className="fa fa-skype"></i>
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a
                                  className="social-icon text-xs-center"
                                  target="_blank"
                                  href="/#"
                                  rel="noopener noreferrer"
                                >
                                  <i className="fa fa-google"></i>
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
        <Pagination
          items={this.state.exampleItems}
          onChangePage={this.onChangePage}
        />
      </div>
    );
  }
}

export default PaginationMain;
