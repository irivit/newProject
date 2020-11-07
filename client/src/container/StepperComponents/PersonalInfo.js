/**
 * Ecommerce Dashboard
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form, FormGroup, Input, Label} from 'reactstrap';
import {Grid} from '@material-ui/core';

// intl messages
import IntlMessages from '../../util/IntlMessages';
import {NotificationManager} from 'react-notifications';

import '../../assets/css/signup.css';

import {saveUserInfo, changeValidFormVariable} from '../../actions';

class PersonalInfo extends Component {
  state = {
    name: '',
    address1: '',
    address2: '',
  };

  componentWillMount () {
    // this.props.pickArtSource("Extensive Gallery");
    // console.log(`reducer en el comp will mount ${this.props.artSource}`);
  }

  componentWillUnmount () {
    const {name, address1, address2} = this.state;
    if (name != "" && address1 != "" &&  address2!= ""){
      this.props.changeValidFormVariable(true);
      this.props.saveUserInfo ({"name":name, "address1": address1, "address2": address2});
      this.props.changeValidFormVariable(false);
    }else {
      NotificationManager.error (
        'Please enter all the information needed'
      );
    }
  }

  render () {
    const {name, address1, address2} = this.state;

    return (
      <Form className="form-container">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Input
              type="Text"
              className="has-input input-lg"
              placeholder="Full Name"
              name="name"
              id="name"
              label="Full Name"
              value={name}
              onChange={e => this.setState ({name: e.target.value})}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Input
              type="Text"
              className="has-input input-lg"
              name="Address1"
              id="address1"
              label="Address 1"
              placeholder="Address 1"
              value={address1}
              onChange={e => this.setState ({address1: e.target.value})}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Input
              type="Text"
              className="has-input input-lg"
              name="Address1"
              id="Address2"
              label="Address 1"
              placeholder="Address 2"
              value={address2}
              onChange={e => this.setState ({address2: e.target.value})}
            />
          </Grid>
        </Grid>
      </Form>
    );
  }
}

// map state to props
const mapStateToProps = ({authUser}) => {
  const {} = authUser;
  return {};
};

export default connect (mapStateToProps, {
  saveUserInfo, changeValidFormVariable
}) (PersonalInfo);
