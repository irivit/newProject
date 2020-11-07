/**
 * Signin Firebase
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
import Footer from '../components/Footer/Footer';

import '../assets/css/signin.css';

// app config
import AppConfig from '../constants/AppConfig';

// redux action
import {signinUserInFirebase} from '../actions';

class Signin extends Component {
  state = {
    email: 'demo@example.com',
    password: '123456',
  };

  /**
	 * On User Login
	 */
  onUserLogin (e) {
    e.preventDefault ();
    if (this.state.email !== '' && this.state.password !== '') {
      console.log (`inside del userlogin button`);
      this.props.signinUserInFirebase (this.state, this.props.history);
    } else {
      NotificationManager.error ('You must fill all data required');
    }
  }

  /**
	 * On User Sign Up
	 */
  onUserSignUp () {
    this.props.history.push ('/signup');
  }
  /**
	 * On Forgot password
	 */
  onForgotPassword () {
    this.props.history.push ('/forgot-password');
  }
  render () {
    const {email, password} = this.state;
    const {loading} = this.props;
    return (
      <div className="background">
        {loading && <LinearProgress />}
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
        <div className="session-inner-wrapper ">
          <div className="container signin-container">
            <Grid container spacing={0}>
              <Grid item xs={12} sm={6}>
                <div className="d-flex justify-content-center background-gray">
                  {/* <div className="col-sm-7 col-md-7 col-lg-8"> */}
                  <div className="session-body text-center">
                    <div className="session-head mb-30">
                      <h2 className="font-weight-bold">
                        {/* Welcome to {AppConfig.brandName} */}
                      </h2>
                    </div>
                    <Form>
                      <FormGroup >
                        <Input
                          type="mail"
                          value={email}
                          name="user-mail"
                          id="user-mail"
                          className="has-input input-lg"
                          placeholder="Enter Email Address"
                          onChange={event =>
                            this.setState ({email: event.target.value})}
                        />
                      </FormGroup>
                      <FormGroup className="has-wrapper">
                        <Input
                          value={password}
                          type="Password"
                          name="user-pwd"
                          id="pwd"
                          className="has-input input-lg"
                          placeholder="Password"
                          onChange={event =>
                            this.setState ({password: event.target.value})}
                        />
                      </FormGroup>
                      <FormGroup className="mb-15">
                        <Button
                          className="mr-10 mb-10"
                          onClick={() => this.onForgotPassword ()}
                        >
                          <p>Forgot your password?</p>
                        </Button>
                      </FormGroup>
                      <FormGroup className="mb-15">
                        <Button
                          color="primary"
                          className="btn-block text-white w-100 signin-button"
                          variant="contained"
                          size="large"
                          onClick={e => this.onUserLogin (e)}
                        >
                          Sign In
                        </Button>
                      </FormGroup>
                    </Form>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} className="border-gray">
                <div className="logo-container ">
                  <img
                    src={AppConfig.appLogo}
                    alt="session-logo"
                    className="img-fluid-logo"
                    width="110"
                    height="35"
                  />
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

// map state to props
const mapStateToProps = ({authUser}) => {
  const {user, loading} = authUser;
  return {user, loading};
};

export default connect (mapStateToProps, {
  signinUserInFirebase
}) (Signin);
