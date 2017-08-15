import { Action } from '@ngrx/store';
import * as authActions from 'app/common/actions/auth.actions';
import IAuthState from '../states/auth.state';

const initialState: IAuthState = {
  isLoggedIn: false,
  error: {},
  accessToken: undefined,
};

export default (state = initialState, action: authActions.Actions): IAuthState => {
  switch (action.type) {

    case authActions.LOGIN_SUCCESS:
    const { accessToken } = action.payload;
      return {
        ...state,
        accessToken,
        isLoggedIn: true
      };

    case authActions.CREATE_USER_SUCCESS:
      return { ...state, ...action.payload };

    case authActions.LOGIN_ERROR:
    case authActions.CREATE_USER_ERROR:
      return {
        ...state,
        ...action.payload 
      };

    case authActions.LOGOUT:
      return Object.assign({}, initialState);

    case authActions.CLEAR_ERROR:
      return { ...state, error: {} };

    default:
      return state;
  }
};
