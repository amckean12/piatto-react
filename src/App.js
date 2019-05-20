import React from 'react';
import './App.css';
import SplashContainer from './splash-page/containers/splash-container'
import HeaderComponent from './header/header.js'
import FooterComponent from './footer/footer.js'
import ProfileContainer from './profile/containers/profile-container.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Switch>
        <div className="initial-page">
          <Route exact path="/" component={HeaderComponent} />
          <div className="initialInputs">
            <Route exact path="/" component={SplashContainer} />
          </div>
            <Route exact path="/" component={FooterComponent} />
        </div>
        <Route exact path="/profile" component={ProfileContainer} />
      </Switch>
    </div>
  );
}

export default App;
