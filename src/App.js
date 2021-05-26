import React from "react";
import "./App.css";
import logo from './1.png'
import footerImage from './2.png'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from '../src/components/main-page'
import CheckPage from '../src/components/chech-page'
import { Link } from 'react-router-dom'

function App() {
  
  

  
  return (
    <Router>
      <div className="main">
        <header className="header">
          <div className="container">
            <div className="header__row">
              <navbar className="navbar">
                <Link to="/"><img className="logo" src={logo} height="60px"/></Link>
                <p className="header__description">
                  <b>Elecrotnic Diversity Visa</b> <br />
                  Applicant Entry System 12.02.00
                </p>
              </navbar>
            </div>
          </div>
        </header>
      <div>
        <Switch>
          <Route exact path="/">
              <HomePage />
          </Route>
          <Route path="/check">
              <CheckPage />
          </Route>
        </Switch>
      </div>
      
      <footer className="footer">
        <div className="container">
          <div className="footer__row">
            <div className="footer__items">
              <img className="footer__image"src={footerImage} />
              
              <button className="btn btn-secondary disabled"><i className="fas fa-globe-africa"></i>travel.state.gov</button>
              <button className="btn btn-secondary disabled"><i className="fas fa-home"></i>Top of page</button>
            </div>
            <p>
            This site is managed by the Bureau of Consular Affairs, U.S. Department of State. External links to other Internet sites should not be construed as an endorsement of the views contained therein.
            </p>
          </div>
        </div>
      </footer>
      </div>
    </Router>
      
    
  );
}
    

export default App;
