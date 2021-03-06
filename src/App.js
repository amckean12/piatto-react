import React from 'react';
import './App.css';
import SplashContainer from './splash-page/containers/splash-container'
import HeaderComponent from './header/header.js'
import FooterComponent from './footer/footer.js'
import ProfileContainer from './profile/containers/profile-container.js'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import history from './history'


function App() {
  return (
    <Router history={history}>
      <div className="App">
          <div className="initial-page">
            <Route
              exact path="/"
              component={HeaderComponent}
              />
            <div className="initialInputs">
              <Route
                exact path="/"
                component={SplashContainer}
                />
            </div>
              <Route
                exact path="/"
                component={FooterComponent}
                />
          </div>
          <Route
            key="menu"
            path="/menu"
            component={ProfileContainer}
            />
          <Route
            key= "add-recipe"
            path="/add-recipe"
            component={ProfileContainer}
            />
          <Route
            key="search-recipes"
            path="/search-recipes"
            component={ProfileContainer} />
      </div>
    </Router>
  );
}

export default App;
