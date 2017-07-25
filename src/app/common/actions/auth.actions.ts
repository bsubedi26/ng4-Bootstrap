import { FeatherService } from '../services/feather.service';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';


@Injectable()
export class AuthActions {
  constructor() {}
  static LOGIN_USER = '[Auth] Login User';
  static LOGIN_USER_SUCCESS = '[Auth] Login User Success';
  static LOGIN_USER_ERROR = '[Auth] Login User Error';
  static CREATE_USER = '[Auth] Create User';
  static CREATE_USER_SUCCESS = '[Auth] Create User Success';
  static CREATE_USER_ERROR= '[Auth] Create User Error';
  static CLEAR_ERROR = '[Auth] Clear Error';
  

  loginUser(email, password): Action {
    return {
      type: AuthActions.LOGIN_USER,
      payload: {
        email,
        password
      }
    };
  }

  loginUserSuccess(response): Action {
    return {
      type: AuthActions.LOGIN_USER_SUCCESS,
      payload: {
        response
      }
    };
  }

  loginUserError(response): Action {
    return {
      type: AuthActions.LOGIN_USER_ERROR,
      payload: {
        response
      }
    };
  }

  createUserSuccess(response): Action {
    return {
      type: AuthActions.CREATE_USER_SUCCESS,
      payload: {
        response
      }
    };
  }
  
  clearError() {
    return {
      type: AuthActions.CLEAR_ERROR
    }
  }

}