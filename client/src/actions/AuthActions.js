/**
 * Auth Actions
 * Auth Action With Google, Facebook, Twitter and Github
 */
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
  LOGIN_FACEBOOK_USER,
  LOGIN_GOOGLE_USER,
  LOGOUT_USER_FAILURE,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  SHOW_MESSAGE,
  SAVE_USER_INFO,
  SAVE_USER_INFO_FAILURE,
  VALID_USER_INFO_FORM,
  SAVE_USER_INFO_SUCCESS,
} from './types';

/**
   * Redux Action Get user
   */
export const getUser = email => ({
  type: GET_USER,
  payload: email,
});

/**
   * Redux Action Get User
   */
export const getUserSuccess = user => ({
  type: GET_USER_SUCCESS,
  payload: user,
});

/**
   * Redux Action Get User
   */
export const getUserFailure = error => ({
  type: GET_USER_FAILURE,
  payload: error,
});

/**
   * Redux Action Save User Info for Sign up
   */
export const saveUserInfo = info => ({
  type: SAVE_USER_INFO,
  payload: info,
});

/**
   * Redux Action Change Valid Form Variable
   */
export const changeValidFormVariable = value => ({
  type: VALID_USER_INFO_FORM,
  payload: value,
});


/**
   * Redux Action Save User Info for Sign up Success
   */
export const saveUserInfoSuccess = info => ({
  type: SAVE_USER_INFO_SUCCESS,
  payload: info,
});

/**
   * Redux Action Save User Info for Sign up Failure
   */
export const saveUserInfoFailure = error => ({
  type: SAVE_USER_INFO_FAILURE,
  payload: error,
});

/**
   * Redux Action To Sigin User With Firebase
   */
export const signinUserInFirebase = (user, history) => ({
  type: LOGIN_USER,
  payload: {user, history},
});

/**
   * Redux Action Signin User Success
   */
export const signinUserSuccess = user => ({
  type: LOGIN_USER_SUCCESS,
  payload: user,
});

/**
   * Redux Action To Signup User Success
   */
export const signUpUserInFirebaseSuccess = user => ({
  type: SIGNUP_USER_SUCCESS,
  payload: user,
});

/**
   * Redux Action To Signup User Failure
   */
export const signUpUserInFirebaseFailure = error => ({
  type: SIGNUP_USER_FAILURE,
  payload: error,
});

/**
   * Redux Action Signin User Failure
   */
export const signinUserFailure = error => ({
  type: LOGIN_USER_FAILURE,
  payload: error,
});

/**
   * Redux Action To Signout User From  Firebase
   */
export const logoutUserFromFirebase = () => ({
  type: LOGOUT_USER,
});

/**
   * Redux Action Signout User Success
   */
export const logoutUserFromFirebaseSuccess = () => ({
  type: LOGOUT_USER_SUCCESS,
});

/**
   * Redux Action Signout User Failure
   */
export const logoutUserFromFirebaseFailure = () => ({
  type: LOGOUT_USER_FAILURE,
});

/**
   * Redux Action To Signup User In Firebase
   */
export const signupUserInFirebase = (user, history) => ({
  type: SIGNUP_USER,
  payload: {user, history},
});

// /**
//  * Redux Action To Signin User In Firebase With Facebook
//  */
// export const signinUserWithFacebook = history => ({
//   type: LOGIN_FACEBOOK_USER,
//   payload: history,
// });

// /**
//  * Redux Action To Signin User In Firebase With Google
//  */
// export const signinUserWithGoogle = history => ({
//   type: LOGIN_GOOGLE_USER,
//   payload: history,
// });

/**
   * Redux Action To Change User Password
   */
export const changePasswords = email =>
  (console.log (
    `dentro de la redux action que se llamo del forntend ${JSON.stringify (email)}`
  ), {
    type: CHANGE_PASSWORD,
    payload: {email},
  });

/**
   * Redux Action Change User Password Success
   */
export const changePasswordSuccess = () => ({
  type: CHANGE_PASSWORD_SUCCESS,
});

/**
   * Redux Action Change User Password Failure
   */
export const changePasswordFailure = () => ({
  type: CHANGE_PASSWORD_FAILURE,
});

export const showAuthMessage = message => {
  return {
    type: SHOW_MESSAGE,
    payload: message,
  };
};
