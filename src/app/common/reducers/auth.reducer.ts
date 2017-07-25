import { Action } from '@ngrx/store';
import { AuthActions } from "app/common/actions/auth.actions";

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

export const reducer = (state = initialState, action: any): IAuthState => {
  switch (action.type) {

    case 'CHANGE_AUTH_TEST': 
      return {
        ...state, 
        test: 'test works'
      }

    case AuthActions.CLEAR_ERROR:
      return { ...state, error: {} }
    
    case AuthActions.LOGIN_USER_SUCCESS:
    case AuthActions.CREATE_USER_SUCCESS:
      return { ...state, ...action.payload.response, error: {} }

    case AuthActions.LOGIN_USER_ERROR:
    case AuthActions.CREATE_USER_ERROR:
      return { 
        ...state, 
        error: {...state.error, ...action.payload.response }
      }

    default:
      return state;
  }
}