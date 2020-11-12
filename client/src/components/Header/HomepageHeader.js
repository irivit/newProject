/**
 * Header
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from 'react-router-dom';
import {Form, FormGroup, Input} from 'reactstrap';
import LinearProgress from '@material-ui/core/LinearProgress';
import {NotificationManager} from 'react-notifications';
import Grid from '@material-ui/core/Grid';
//import Footer from '../components/Footer/Footer';

// intl messages
import IntlMessages from '../../util/IntlMessages';

// app config
import AppConfig from '../../constants/AppConfig';

const Header = () => (
    <div className="background">

    <AppBar position="static" className="session-header">
      <Toolbar>
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="session-logo">
              <Link to="/">
                {/* <img
                    src={AppConfig.appLogo}
                    alt="session-logo"
                    className="img-fluid"
                    width="110"
                    height="35"
                  /> */}
              </Link>
            </div>
            <div>
              <a className="mr-15 " onClick={() => this.onUserSignUp ()}>
                Create New account?
              </a>
              <Button
                variant="contained"
                id="signup-button"
                className=" signup-button"
                onClick={() => this.onUserSignUp ()}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  </div>
);

export default Header;


