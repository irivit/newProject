/**
 * Landing Page
 */
import React, { Component } from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';

// Components
import Header from '../components/Header/HomepageHeader';
import Footer from '../components/Footer/Footer';

// router service
import routerService from '../services/_routerService';

class LandingPage extends Component {
   render() {
      return (
         <div>
            <Header/>
            <Footer/>
         </div>
      );
      
   }
}

export default withRouter(LandingPage);
