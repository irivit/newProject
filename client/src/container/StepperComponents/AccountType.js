/**
 * Ecommerce Dashboard
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Form, FormGroup, Input, Label} from 'reactstrap';
import Button from '@material-ui/core/Button';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Switch from '@material-ui/core/Switch';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import {Grid} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
// intl messages
import IntlMessages from '../../util/IntlMessages';
import '../../assets/css/signup.css';
const countriesStates = require ('countrycitystatejson');

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

  componentWillMount () {
    // this.props.pickArtSource("Extensive Gallery");
    // console.log(`reducer en el comp will mount ${this.props.artSource}`);
  }

  handleChangeCountry = (event, newValue) => {
    this.setState ({country: newValue.shortName});
  };

  handleChangeState = (event, newValue) => {
    this.setState ({stateC: newValue});
  };

  handleChange = name => (event, checked) => {
    this.setState ({[name]: checked});
    if (this.state.checkedCompany) {
      this.setState ({type: 'personal'});
    } else {
      this.setState ({type: 'company'});
    }
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
    const countires = countriesStates.getCountries ();
    const states = countriesStates.getStatesByShort (this.state.country);
    return (
      <Form className="form-container">
        <FormControl component="fieldset" className="radiobutton">
          <RadioGroup
            aria-label="artSource"
            name="artSource"
            value={this.state.artSource}
            onChange={e => this.handleChangeRadio (e, 'artSource')}
          >
            <FormControlLabel
              value="Employer"
              control={<Radio />}
              label="Employer"
            />
            <FormControlLabel
              value="Candidate"
              control={<Radio />}
              label="Candidate"
            />
          </RadioGroup>
        </FormControl>
      </Form>
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
