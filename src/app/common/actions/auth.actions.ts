import { Action } from '@ngrx/store';

export const LOGIN = '[Auth] Login';
export const LOGIN_SUCCESS = '[Auth] Login Success';
export const LOGIN_ERROR = '[Auth] Login Error';
export const LOGIN_REDIRECT = '[Auth] Login Redirect';
export const LOGOUT = '[Auth] Logout';
export const LOGOUT_SUCCESS = '[Auth] Logout Success';
export const LOGOUT_ERROR = '[Auth] Logout Error';

export const CREATE_USER = '[Auth] Create User';
export const CREATE_USER_SUCCESS = '[Auth] Create User Success';
export const CREATE_USER_ERROR = '[Auth] Create User Error';
export const CLEAR_ERROR = '[Auth] Clear Error';


export class Login implements Action {
  readonly type = LOGIN;

  constructor(public payload: any) {}
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor(public payload: any) {}
}

export class LoginError implements Action {
  readonly type = LOGIN_ERROR;

  constructor(public payload: any) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;

  constructor(public payload?: any) {}
}

export class CreateUserSuccess implements Action {
  readonly type = CREATE_USER_SUCCESS;

  constructor(public payload: any) {}
}

export class CreateUserError implements Action {
  readonly type = CREATE_USER_ERROR;

  constructor(public payload: any) {}
}

export class ClearError implements Action {
  readonly type = CLEAR_ERROR;

  constructor(public payload: any) {}
}

export type Actions = Login | LoginSuccess | LoginError | 
  CreateUserSuccess | ClearError | CreateUserError |
  Logout;
