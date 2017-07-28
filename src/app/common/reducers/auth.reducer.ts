import { Action } from '@ngrx/store';
import * as authActions from 'app/common/actions/auth.actions';

export interface IAuthState {
  accessToken: string;
  user: Object;
  error: Object;
  isLoggedIn: boolean;
}

const initialState: IAuthState = {
  isLoggedIn: false,
  accessToken: undefined,
  user: {
    email: 'INIT',
    _id: 'INIT'
  },
  error: {}
};

export const reducer = (state = initialState, action: authActions.Actions): IAuthState => {
  switch (action.type) {

    case authActions.CLEAR_ERROR:
      return { ...state, error: {} };

    case authActions.LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
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
      return {
        ...state,
        isLoggedIn: false,
        accessToken: undefined,
        user: {
          email: 'INIT',
          _id: 'INIT'
        },
      };

    default:
      return state;
  }
};
