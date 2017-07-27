import { Action } from '@ngrx/store';
import * as authActions from 'app/common/actions/auth.actions';

export interface IAuthState {
  accessToken: string;
  user: Object;
  error: Object;
}

const initialState: IAuthState = {
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
    case authActions.CREATE_USER_SUCCESS:
      return { ...state, ...action.payload.response, error: {} };

    case authActions.LOGIN_ERROR:
    case authActions.CREATE_USER_ERROR:
      return { 
        ...state, 
        error: {...state.error, ...action.payload.response }
      };

    default:
      return state;
  }
}