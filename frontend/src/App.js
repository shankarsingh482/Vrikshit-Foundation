import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppRoutes } from './routes';
import Header from '../src/components/header/header';
import Footer from '../src/components/footer/footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <div className="all-Pages-Common">
          <Switch>
            {AppRoutes.map(route => (
              <Route
                exact={route.exact}
                path={route.path}
                component={route.component}
                key={route.id}
              />
            ))}
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
