import { Action } from '@ngrx/store';
import * as authActions from 'app/common/actions/auth.actions';

export interface IAuthState {
  isLoggedIn: boolean;
  user: Object;
  accessToken: string;
  error: Object;
}

const initialState: IAuthState = {
  isLoggedIn: false,
  error: {},
  user: {
    email: 'INIT',
    _id: 'INIT'
  },
  accessToken: undefined,
  
};



// export const reducer = (state = initialState, action: authActions.Actions): IAuthState => {
// export function reducer(state = initialState, action: authActions.Actions): IAuthState {
export function reducer(state = initialState, action) {
  switch (action.type) {

    case authActions.LOGIN_SUCCESS:
    const { accessToken, user } = action.payload;
      return {
        ...state,
        accessToken,
        user,
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

    case authActions.CLEAR_ERROR:
      return { ...state, error: {} };

    default:
      return state;
  }
};
