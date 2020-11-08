// /**
//  * Sign Up With Firebase
//  */
// import React, {Component} from 'react';
// import Button from '@material-ui/core/Button';
// import {connect} from 'react-redux';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import {Link} from 'react-router-dom';
// import {Form, Label} from 'reactstrap';
// import LinearProgress from '@material-ui/core/LinearProgress';
// import QueueAnim from 'rc-queue-anim';
// import Switch from '@material-ui/core/Switch';
// import {Grid} from '@material-ui/core';
// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// // components
// import {NotificationManager} from 'react-notifications';
// import SweetAlert from 'react-bootstrap-sweetalert';
// // import Bulkify from 'bulkify';
// // const bundle = browserify({entries: [...]}).transform(Bulkify, {global: true});

// import SignupStepper from './SignupStepper';
// import '../assets/css/signin.css';

// // intl messages
// import IntlMessages from '../util/IntlMessages';
// import PersonalInfo from './StepperComponents/PersonalInfo';

// // app config
// import AppConfig from '../constants/AppConfig';

// // redux action
// import {signupUserInFirebase} from '../actions';

// const countriesStates = require ('countrycitystatejson');

// class SignupFirebase extends Component {
//   state = {
//     name: '',
//     email: '',
//     password: '',
//     phone: '',
//     address1: '',
//     address2: '',
//     city: '',
//     type: '',
//     companyName: '',
//     country: 'AD',
//     stateC: '',
//     zipcode: '',
//     checkedCompany: false,
//     errorPassword: false,
//     errorEmail: false,
//     errorPhone: false,
//     success: false,
//   };

//   handleChangeCountry = (event, newValue) => {
//     this.setState ({country: newValue.shortName});
//   };

//   handleChangeState = (event, newValue) => {
//     this.setState ({stateC: newValue});
//   };

//   handleChange = name => (event, checked) => {
//     this.setState ({[name]: checked});
//     if (this.state.checkedCompany) {
//       this.setState ({type: 'personal'});
//     } else {
//       this.setState ({type: 'company'});
//     }
//   };

//   validatePhone (phone) {
//     var validNumber = '0123456789.-';
//     for (let i = 0; i < phone.length; i++) {
//       if (validNumber.indexOf (phone.charAt (i)) === -1) {
//         this.setState ({errorPhone: true});
//         break;
//       }
//     }
//     this.setState ({errorPhone: false});
//   }
//   /**
//    * On Confirm dialog
//    * @param {string} key
//    */
//   onConfirm (key) {
//     this.setState ({[key]: false});
//     window.location = '/signin';
//   }
//   /**
//    * Open Alert
//    * @param {key} key
//    */
//   openAlert (key) {
//     this.setState ({[key]: true});
//   }
//   /**
//    * On User Signup
//    */
//   onUserSignUp () {
//     const {
//       email,
//       password,
//       name,
//       phone,
//       address1,
//       address2,
//       city,
//       country,
//       stateC,
//       zipcode,
//       companyName,
//       type,
//     } = this.state;

//     this.validatePhone (phone);

//     if (
//       email !== '' &&
//       password !== '' &&
//       name !== '' &&
//       phone !== '' &&
//       address1 !== '' &&
//       country !== '' &&
//       city !== '' &&
//       zipcode !== ''
//     ) {
//       if (stateC !== '') {
//         console.log (`state ${JSON.stringify (this.state)}`);
//         if (password.length < 6) {
//           NotificationManager.error (
//             'Password length has to be at least 6 characteres'
//           );
//           this.setState ({errorPassword: true});
//         } else {
//           if (this.state.errorPhone) {
//             NotificationManager.error ('Please enter a valid phone number');
//           } else {
//             this.setState ({errorPassword: false});
//             this.setState ({errorPhone: false});
//             this.openAlert ('success');
//             this.props.signupUserInFirebase (
//               {
//                 email,
//                 password,
//                 name,
//                 phone,
//                 address1,
//                 address2,
//                 city,
//                 country,
//                 stateC,
//                 zipcode,
//                 type,
//                 companyName,
//               },
//               this.props.history
//             );
//           }
//         }
//       } else {
//         NotificationManager.error ('You must to choose an State');
//       }
//     } else {
//       NotificationManager.error ('You must fill all data required');
//     }
//   }

//   render () {
//     const {
//       name,
//       email,
//       password,
//       phone,
//       address1,
//       address2,
//       city,
//       companyName,
//       zipcode,
//     } = this.state;
//     const {loading} = this.props;

//     const countires = countriesStates.getCountries ();
//     const states = countriesStates.getStatesByShort (this.state.country);

//     return (
//       // <QueueAnim type="bottom" duration={2000}>
//       (
//         <div className="background">
//           {loading && <LinearProgress />}
//           <AppBar position="static" className="session-header">
//             <Toolbar>
//               <div className="container">
//                 <div className="d-flex justify-content-between">
//                   <div className="session-logo">
//                     <Link to="/">
//                       <img
//                         src={AppConfig.appLogo}
//                         alt="session-logo"
//                         width="110"
//                         height="35"
//                       />
//                     </Link>
//                   </div>
//                   <div className="signin-up-session">
//                     <Link to="/signin" className="mr-15 text-white">
//                       Already have an account?
//                     </Link>
//                     <Button
//                       component={Link}
//                       to="/signin"
//                       variant="contained"
//                       className="btn-light"
//                     >
//                       Sign In
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </Toolbar>
//           </AppBar>
//           {/* <SignupStepper />
//           <PersonalInfo /> */}
//         </div>
//       )
//     );
//   }
// }

// // map state to props
// const mapStateToProps = ({authUser}) => {
//   const {loading} = authUser;
//   return {loading};
// };

// export default connect (mapStateToProps, {
//   signupUserInFirebase,
// }) (SignupFirebase);

/**
 * Sign Up With Firebase
 */
import React, {Component, Fragment} from 'react';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from 'react-router-dom';
import {Form, FormGroup, Label, Input, Col} from 'reactstrap';
import LinearProgress from '@material-ui/core/LinearProgress';
import QueueAnim from 'rc-queue-anim';
import Switch from '@material-ui/core/Switch';
import {Grid} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
// components
import {SessionSlider} from '../components/Widgets';
import {NotificationManager} from 'react-notifications';
import SweetAlert from 'react-bootstrap-sweetalert';
// import Bulkify from 'bulkify';
// const bundle = browserify({entries: [...]}).transform(Bulkify, {global: true});

// intl messages
import IntlMessages from '../util/IntlMessages';

// app config
import AppConfig from '../constants/AppConfig';

// redux action
import {signupUserInFirebase} from '../actions';

import '../assets/css/signup.css';

const countriesStates = require ('countrycitystatejson');

class SignupFirebase extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    type: '',
    companyName: '',
    country: 'AD',
    stateC: '',
    zipcode: '',
    checkedCompany: false,
    errorPassword: false,
    errorEmail: false,
    errorPhone: false,
    success: false,
  };

  handleChangeCountry = (event, newValue) => {
    this.setState ({country: newValue.shortName});
  };

  handleChangeState = (event, newValue) => {
    this.setState ({stateC: newValue});
  };

  handleChange = name => (event, checked) => {
    this.setState ({[name]: checked});
    if (this.state.checkedCompany) {
      this.setState ({type: 'Candidate'});
    } else {
      this.setState ({type: 'Employer'});
    }
  };

  validatePhone (phone) {
    var validNumber = '0123456789.-';
    for (let i = 0; i < phone.length; i++) {
      if (validNumber.indexOf (phone.charAt (i)) == -1) {
        this.setState ({errorPhone: true});
        break;
      }
    }
    this.setState ({errorPhone: false});
  }
  /**
   * On Confirm dialog
   * @param {string} key
   */
  onConfirm (key) {
    this.setState ({[key]: false});
    window.location = '/signin';
  }
  /**
   * Open Alert
   * @param {key} key
   */
  openAlert (key) {
    this.setState ({[key]: true});
  }
  /**
   * On User Signup
   */
  onUserSignUp () {
    const {
      email,
      password,
      name,
      phone,
      address1,
      address2,
      city,
      country,
      stateC,
      zipcode,
      companyName,
      type,
    } = this.state;

    this.validatePhone (phone);

    if (
      email !== '' &&
      password !== '' &&
      name !== '' &&
      phone !== '' &&
      address1 !== '' &&
      country !== '' &&
      city !== '' &&
      zipcode !== ''
    ) {
      if (stateC !== '') {
        console.log (`state ${JSON.stringify (this.state)}`);
        if (password.length < 6) {
          NotificationManager.error (
            'Password length has to be at least 6 characteres'
          );
          this.setState ({errorPassword: true});
        } else {
          if (this.state.errorPhone) {
            NotificationManager.error ('Please enter a valid phone number');
          } else {
            this.setState ({errorPassword: false});
            this.setState ({errorPhone: false});
            this.openAlert ('success');
            this.props.signupUserInFirebase (
              {
                email,
                password,
                name,
                phone,
                address1,
                address2,
                city,
                country,
                stateC,
                zipcode,
                type,
                companyName,
              },
              this.props.history
            );
          }
        }
      } else {
        NotificationManager.error ('You must to choose an State');
      }
    } else {
      NotificationManager.error ('You must fill all data required');
    }
  }

  render () {
    const {
      name,
      email,
      password,
      phone,
      address1,
      address2,
      city,
      companyName,
      country,
      state,
      zipcode,
    } = this.state;
    const {loading} = this.props;

    const countires = countriesStates.getCountries ();
    const states = countriesStates.getStatesByShort (this.state.country);

    return (
      <Fragment>
        <div className="background">
          {loading && <LinearProgress />}
          <AppBar position="static" className="session-header">
            <Toolbar>
              <div className="container">
                <div className="d-flex justify-content-between">
                  <div className="session-logo">
                    <Link to="/">
                      <img
                        src={AppConfig.appLogo}
                        alt="session-logo"
                        width="110"
                        height="35"
                      />
                    </Link>
                  </div>
                  <div className="signin-up-session">
                    <Link to="/signin" className="mr-15 text-white">
                      Already have an account?
                    </Link>
                    <Button
                      component={Link}
                      to="/signin"
                      variant="contained"
                      className="signup-button-appbar"
                    >
                      Sign In
                    </Button>
                  </div>
                </div>
              </div>
            </Toolbar>
          </AppBar>
          <div className="working-area">
            <div className="container ">
              <div className="session-body text-center">
                {/* <div className="session-head mb-15">
                  <h2>{AppConfig.brandName} Online Store</h2>
                </div> */}
                <Form className="form-container">
                  <Grid container spacing={2}>
                    <Grid item xs={8}>
                      <TextField
                        name="name"
                        id="name"
                        label="Full Name"
                        variant="outlined"
                        className="backgroundWhite"
                        fullWidth
                        value={name}
                        onChange={e => this.setState ({name: e.target.value})}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        name="phone"
                        id="phone"
                        label="Phone Number"
                        className="backgroundWhite"
                        variant="outlined"
                        fullWidth
                        value={phone}
                        onChange={e => this.setState ({phone: e.target.value})}
                      />
                      {this.state.errorPassword &&
                        <p className="text-danger">
                          * Please enter a valid phone number
                        </p>}
                    </Grid>
                    <Grid item xs={4}>
                      <Label for="account">
                        <IntlMessages id="components.Candidate" />
                      </Label>
                      <Switch
                        checked={this.state.checkedCompany}
                        onChange={this.handleChange ('checkedCompany')}
                        aria-label="checkedCompany"
                      />
                      <Label for="account">
                        <IntlMessages id="components.Employer" />
                      </Label>
                    </Grid>
                    <Grid item xs={8}>
                      {this.state.checkedCompany &&
                        <TextField
                          name="companyName"
                          id="com[panyName"
                          type="text"
                          label="Company Name"
                          className="backgroundWhite"
                          variant="outlined"
                          fullWidth
                          value={companyName}
                          onChange={e =>
                            this.setState ({companyName: e.target.value})}
                        />}
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        name="email"
                        id="email"
                        className="backgroundWhite"
                        label="Email Address"
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={e => this.setState ({email: e.target.value})}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        id="password"
                        label="Password"
                        className="backgroundWhite"
                        placeholder="Notification content"
                        variant="outlined"
                        type="Password"
                        placeholder="Password"
                        value={password}
                        fullWidth
                        onChange={e =>
                          this.setState ({password: e.target.value})}
                      />
                      {this.state.errorPassword &&
                        <p className="text-danger">
                          * Password hast to have at least 6 characteres
                        </p>}
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        name="Address1"
                        id="address1"
                        type="text"
                        className="backgroundWhite"
                        label="Address 1"
                        variant="outlined"
                        fullWidth
                        value={address1}
                        onChange={e =>
                          this.setState ({address1: e.target.value})}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        name="Address12"
                        id="address2"
                        type="text"
                        label="Address 2"
                        className="backgroundWhite"
                        variant="outlined"
                        fullWidth
                        value={address2}
                        onChange={e =>
                          this.setState ({address2: e.target.value})}
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <Autocomplete
                        options={countires}
                        getOptionLabel={option =>
                          option && option.name
                            ? option.name
                            : option ? option : ''}
                        autoComplete
                        autoSelect
                        disableClearable
                        includeInputInList
                        onChange={this.handleChangeCountry}
                        renderInput={params => (
                          <TextField
                            {...params}
                            label="Country"
                            variant="outlined"
                            fullWidth
                            className="backgroundWhite"
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Autocomplete
                        options={states}
                        getOptionLabel={option => option}
                        autoComplete
                        autoSelect
                        disableClearable
                        includeInputInList
                        onChange={this.handleChangeState}
                        renderInput={params => (
                          <TextField
                            {...params}
                            label="State"
                            variant="outlined"
                            fullWidth
                            className="backgroundWhite"
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        name="City"
                        id="city"
                        type="text"
                        label="City"
                        variant="outlined"
                        className="backgroundWhite"
                        fullWidth
                        value={city}
                        onChange={e => this.setState ({city: e.target.value})}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        name="Zipcode"
                        id="zipcode"
                        type="text"
                        label="Zip Code"
                        variant="outlined"
                        className="backgroundWhite"
                        fullWidth
                        value={zipcode}
                        onChange={e =>
                          this.setState ({zipcode: e.target.value})}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        color="primary"
                        className="btn-block text-white w-50 signup-button-2"
                        variant="contained"
                        size="medium"
                        onClick={() => {
                          this.onUserSignUp ();
                        }}
                      >
                        Sign Up
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <SweetAlert
          success
          show={this.state.success}
          title="Check your email to validate your account before to sign in!"
          btnSize="sm"
          onConfirm={() => {
            this.onConfirm ('success');
          }}
        />
      </Fragment>
    );
  }
}

// map state to props
const mapStateToProps = ({authUser}) => {
  const {loading} = authUser;
  return {loading};
};

export default connect (mapStateToProps, {
  signupUserInFirebase,
}) (SignupFirebase);
