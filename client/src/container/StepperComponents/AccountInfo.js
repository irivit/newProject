/**
 * Ecommerce Dashboard
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Form, FormGroup, Input, Label} from 'reactstrap';

import '../../assets/css/signup.css';


// import {
//   pickArtSource,
//   pickService
// } from "../../../../../actions/QuoteActions";

class AccountInfo extends Component {
  state = {
    email: '',
    password: '',
  };

  render () {
    const {
      email,
      password,
    } = this.state;
  
    return (
      <Form className="form-container">
        <FormGroup>
          <Input
            type="mail"
            value={email}
            name="user-mail"
            id="user-mail"
            className="has-input input-lg"
            placeholder="Enter Email Address"
            onChange={event => this.setState ({email: event.target.value})}
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
            onChange={event => this.setState ({password: event.target.value})}
          />
        </FormGroup>
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
) (AccountInfo);
