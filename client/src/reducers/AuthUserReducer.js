/**
 * Auth User Reducers
 */
import {NotificationManager} from 'react-notifications';
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  SHOW_MESSAGE,
  GET_USER_SUCCESS,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAILURE,
  SAVE_USER_INFO_FAILURE,
  SAVE_USER_INFO_SUCCESS,
  VALID_USER_INFO_FORM,
} from '../actions/types';

/**
 * initial auth user
 */
const INIT_STATE = {
  user: localStorage.getItem ('user_id'),
  loading: false,
  userAuthe: localStorage.getItem ('user_info'),
  userId: localStorage.getItem ('umsqqidl'),
  userData: {},
  validForm: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {...state, loading: true};

    case LOGIN_USER_SUCCESS:
      console.log (`user success login ${JSON.stringify (action.payload)}`);
      return {
        ...state,
        loading: false,
        userData: action.payload.userData,
        user: action.payload.uid,
        userAuthe: action.payload.userAuthe,
        userId: action.payload.userId,
      };

    case LOGIN_USER_FAILURE:
      NotificationManager.error (action.payload);
      return {...state, loading: false};

    case LOGOUT_USER:
      return {...state};

    case LOGOUT_USER_SUCCESS:
      NotificationManager.success ('User Logged Out');
      return {...state, user: null};

    case LOGOUT_USER_FAILURE:
      return {...state};

    case SIGNUP_USER:
      return {...state, loading: true};

    case SIGNUP_USER_SUCCESS:
      NotificationManager.success ('Account Created');
      return {
        ...state,
        loading: false,
        user: action.payload.uid,
        userAuthe: action.payload.userAuthe.Email,
      };

    case SHOW_MESSAGE:
      NotificationManager.error (action.payload);
      return {
        ...state,
      };

    case SAVE_USER_INFO_SUCCESS:
      return {
        ...state,
        user: {...state.user, user: action.payload},
      };

      case VALID_USER_INFO_FORM:
        return {
          ...state,
          validForm: action.payload,
        };

    case SAVE_USER_INFO_FAILURE:
      NotificationManager.error (
        'Fail to save the profile!' + action.payload
      );
      return {
        ...state,
      };

    case GET_USER_SUCCESS:
      return {...state, userData: action.payload};

    case USER_UPDATE_SUCCESS:
      NotificationManager.success ('Profile Updated Successfully!');
      return {...state, userData: action.payload};

    case USER_UPDATE_FAILURE:
      NotificationManager.error (
        'Fail to update the profile, ' + action.payload
      );
      return {...state};

    case SIGNUP_USER_FAILURE:
      NotificationManager.error (action.payload);
      return {...state, loading: false};

    default:
      return {...state};
  }
};
