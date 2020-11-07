import React from 'react';
import { connect } from "react-redux";

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import PersonalInfo from './StepperComponents/PersonalInfo';
import Accountinfo from './StepperComponents/AccountInfo';
import AccountType from './StepperComponents/AccountType';
import PersonalArea from './StepperComponents/PersonalArea';

import '../assets/css/signup.css';

function getSteps () {
  return ['Personal info', 'User Area', 'User type', 'Account info'];
}

function getStepContent (stepIndex) {
  switch (stepIndex) {
    case 0:
      return <PersonalInfo />;
    case 1:
      return <PersonalArea />;
    case 2:
      return <AccountType />;
    default:
      return <Accountinfo />;
  }
}

class HorizontalLabelPositionBelowStepper extends React.Component {
  state = {
    activeStep: 0,
    success: false,
  };

  handleNext = () => {
    const {activeStep} = this.state;
    this.setState ({
      activeStep: activeStep + 1,
    });
  };

  handleBack = () => {
    const {activeStep} = this.state;
    this.setState ({
      activeStep: activeStep - 1,
    });
  };

  handleReset = () => {
    this.setState ({
      activeStep: 0,
    });
  };

  render () {
    const steps = getSteps ();
    const {activeStep} = this.state;

    return (
      <div>
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          className="stepper-rtl stepper "
        >
          {steps.map (label => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div className="working-area">
          <div>
            {this.state.activeStep === steps.length
              ? <div className="pl-40">
                  <p>All steps completed - you&quot;re finished</p>
                  <Button
                    variant="contained"
                    className="btn btn-success text-white"
                    onClick={this.handleReset}
                  >
                    Reset
                  </Button>
                </div>
              : <div>
                  {getStepContent (activeStep)}
                  <div className="buttons-container">
                    <Button
                      variant="contained"
                      size="medium"
                      className="btn-danger text-white mr-10 mb-10"
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      size="medium"
                      className="text-white mr-10 mb-10"
                      onClick={this.handleNext}
                      enable ={(this.props.validForm).toString()}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </div>}
          </div>
        </div>
      </div>
    );
  }
}


// map state to props
const mapStateToProps = ({  authUser }) => {
  const { userData, validForm } = authUser;

  return {
    userData, validForm
  };
};

export default connect (mapStateToProps, {}) (
  HorizontalLabelPositionBelowStepper
);
