import React, {Component} from 'react';
import {Form, FormGroup, Input} from 'reactstrap';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from 'react-router-dom';
import QueueAnim from 'rc-queue-anim';

// app config
import AppConfig from '../../../constants/AppConfig';

// redux action
// import {changePasswords}  from 'Actions';

import {

  CHANGE_PASSWORD

} from '../../../actions/types';

import {NotificationManager} from 'react-notifications';

class Forgotpwd extends Component {
  state = {
    email: '',
  };

  /**
	 * On User Signup
	 */
  onChangePassword () {
    const {email} = this.state;
    console.log (
      `email en el onclick del comp para cambiar contraseña ${email}`
    );
    if (email !== '') {
      // changePasswords(email);
      this.props.changePasswords (this.state.email);
    } else {
      NotificationManager.error ('You must fill the email field');
    }
  }
  render () {
    const email = this.state.email;
    return (
      <QueueAnim type="bottom" duration={2000}>
        <div className="rct-session-wrapper" key="1">
          <AppBar position="static" className="session-header">
            <Toolbar>
              <div className="container">
                <div className="d-flex justify-content-between">
                  <div className="session-logo">
                    <Link to="/">
                      <img
                        src={require ('../../../assets/img/site-logo.png')}
                        alt="session-logo"
                        className="img-fluid"
                        width="110"
                        height="35"
                      />
                    </Link>
                  </div>

                </div>
              </div>
            </Toolbar>
          </AppBar>
          <div className="session-inner-wrapper p-4 h-100 p-md-0">
            <div className="row">
              <div className="col-sm-8 col-lg-5 mx-auto">
                <div className="session-body text-center">
                  <div className="session-head mb-30">
                    <h2>Get started with {AppConfig.brandName}</h2>
                    <p className="mb-0">Most powerful ReactJS admin panel</p>
                  </div>
                  <Form>
                    <FormGroup className="has-wrapper">
                      <Input
                        type="mail"
                        name="user-mail"
                        value={email}
                        id="user-mail"
                        className="has-input input-lg"
                        placeholder="Enter Email Address"
                        onChange={event =>
                          this.setState ({email: event.target.value})}
                      />
                      <span className="has-icon">
                        <i className="ti-email" />
                      </span>
                    </FormGroup>
                    <FormGroup>

                      <Button
                        variant="contained"
                        className="btn-info text-white btn-block btn-large w-100"
                        onClick={() => this.onChangePassword ()}
                      >
                        Reset Password
                      </Button>
                    </FormGroup>
                    <Button
                      component={Link}
                      to="/signin"
                      className="btn-dark btn-block btn-large text-white w-100"
                    >
                      Already having account?  Login
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </QueueAnim>
    );
  }
}

// // map state to props
// const mapStateToProps = ({authUser}) => {
//   console.log (
//     `hit the mapStateToProps authUser email: ${JSON.stringify (authUser)}`
//   );
//   // const email =  state.email;
//   // return email;
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     changePasswords: email => {
//       dispatch(changePasswords(email))
//     }
//   }
// }

const mapDispatchToProps = dispatch => ({
  // changePasswords: (email) => dispatch(changePasswords(email))
  changePasswords: (email) =>
    dispatch ({
      type: CHANGE_PASSWORD,
      email: email
    }),
});

export default connect (null, mapDispatchToProps) (Forgotpwd);
// export default connect (mapStateToProps, changePasswords) (Forgotpwd);

// export default Forgotpwd
