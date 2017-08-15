import { Action } from '@ngrx/store';
import * as authActions from 'app/common/actions/auth.actions';
import IUserState from '../states/user.state';

const initialState: IUserState = {
  credentials: {
    email: 'INIT',
    _id: 'INIT'
  }
  // error: {},
};

export default (state = initialState, action: authActions.Actions): IUserState => {
  switch (action.type) {

    case authActions.LOGIN_SUCCESS:
      const { user } = action.payload;
      const { email, _id } = user;
      return {
        ...state,
        credentials: user
      };

    // case authActions.CREATE_USER_SUCCESS:
    //   return { ...state, ...action.payload };

    // case authActions.LOGIN_ERROR:
    // case authActions.CREATE_USER_ERROR:
    //   return {
    //     ...state,
    //     ...action.payload
    //   };

    case authActions.LOGOUT:
      return Object.assign({}, initialState);

    default:
      return state;
  }
};
