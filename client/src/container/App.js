/**
 * App.js Layout Start Here
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';
import {NotificationContainer} from 'react-notifications';

// rct theme provider
import RctThemeProvider from './RctThemeProvider';

//Main App
import RctDefaultLayout from './DefaultLayout';

// CRM layout
import CRMLayout from './CRMLayout';

// async components
import {
  AsyncSessionLoginComponent,
  AsyncSessionRegisterComponent,
  AsyncSessionPage404Component,
  AsyncClientDashboardComponent,
  AsyncForgotPasswordComponent
} from '../components/AsyncComponent/AsyncComponent';

import AppSignIn from './SigninFirebase';
import AppSignUp from './SignupFirebase';
import AppLanding from './LandingPage';

import {getUser} from '../actions';

/**
 * Initial Path To Check Whether User Is Logged In Or Not
 */
const InitialPath = ({component: Component, authUser, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      authUser
        ? <Component {...props} />
        : <Redirect
            to={{
              pathname: '/landing',
              state: {from: props.location},
            }}
          />
    }
  />
);

class App extends Component {

  render () {
    const {location, match, user, userData} = this.props;
    if (location.pathname === '/') {
      if (user === null) {
        return <Redirect to={'/landing'} />;
      } else {
        if (userData.Rol != 'Client') {
          return <Redirect to={'/app/client'} />;
        } else {
          return <Redirect to={'/app/client'} />;
        }
      }
      // return <Redirect to={'/app/dashboard/ecommerce'} />;
    }
    return (
      <RctThemeProvider>
        <NotificationContainer />
        <InitialPath
          path={`${match.url}app`}
          authUser={user}
          component={RctDefaultLayout}
        />
        <Route path="/dashboard" component={CRMLayout} />
        <Route path="/landing" component={AppLanding} />
        <Route path="/signin" component={AppSignIn} />
        <Route path="/signup" component={AppSignUp} />
        <Route path="/session/404" component={AsyncSessionPage404Component} />
        <Route path="/forgot-password" component={AsyncForgotPasswordComponent} />
        <Route path="/client" component={AsyncClientDashboardComponent} />
        <Route path="/dashboard" component={AsyncClientDashboardComponent} />
      </RctThemeProvider>
    );
  }
}

// map state to props
const mapStateToProps = ({authUser}) => {
  const {user, userData} = authUser;
  return {user, userData};
};

export default connect (mapStateToProps, {getUser}) (App);
