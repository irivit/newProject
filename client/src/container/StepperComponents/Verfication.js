/**
 * Ecommerce Dashboard
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Container, Form, FormGroup, Input, Label} from 'reactstrap';
import Button from '@material-ui/core/Button';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Switch from '@material-ui/core/Switch';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import {Divider, Grid} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
// intl messages
import IntlMessages from '../../util/IntlMessages';
import ReactInputVerificationCode from 'react-input-verification-code';

import '../../assets/css/signup.css';
import ReactCodeInput from 'react-verification-code-input';
// import {
//   pickArtSource,
//   pickService
// } from "../../../../../actions/QuoteActions";

class Materials extends Component {
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

  render () {
    const {
      name,
      email,
      password,
      phone,
      address1,
      address2,
      city,
      zipcode,
    } = this.state;

    return (
      <div className="form-container">
        <h1>Enter your verification code:</h1>    
        <ReactCodeInput type="number" fields={6} fieldWidth={48} fieldHeight={44}/> 
      </div>
    );
  }
}

// map state to props
// const mapStateToProps = ({ quote }) => {
//   const { serviceSelected, artSource } = quote;
//   return { serviceSelected, artSource };
// };

export default connect (
  null,
  {
    // pickArtSource,
    // pickService
  }
) (Materials);
