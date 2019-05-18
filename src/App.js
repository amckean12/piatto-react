import React from 'react';
import './App.css';
import SplashContainer from './splash-page/containers/splash-container'
import Header from './header/header.js'
import FooterComponent from './footer/footer.js'


function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <div className="initialInputs">
        <SplashContainer />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
