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
  CreateUserSuccess | ClearError | CreateUserError;

// @Injectable()
// export class AuthActions {
//   static LOGIN_USER = '[Auth] Login User';
//   static LOGIN_USER_SUCCESS = '[Auth] Login User Success';
//   static LOGIN_USER_ERROR = '[Auth] Login User Error';
//   static CREATE_USER = '[Auth] Create User';
//   static CREATE_USER_SUCCESS = '[Auth] Create User Success';
//   static CREATE_USER_ERROR= '[Auth] Create User Error';
//   static CLEAR_ERROR = '[Auth] Clear Error';
  
//   constructor() {}

//   loginUser(email, password): Action {
//     return {
//       type: AuthActions.LOGIN_USER,
//       // payload: {
//       //   email,
//       //   password
//       // }
//     };
//   }

//   loginUserSuccess(response): Action {
//     return {
//       type: AuthActions.LOGIN_USER_SUCCESS,
//       // payload: {
//       //   response
//       // }
//     };
//   }

//   loginUserError(response): Action {
//     return {
//       type: AuthActions.LOGIN_USER_ERROR,
//       // payload: {
//       //   response
//       // }
//     };
//   }

//   createUserSuccess(response): Action {
//     return {
//       type: AuthActions.CREATE_USER_SUCCESS,
//       // payload: {
//       //   response
//       // }
//     };
//   }
  
//   clearError() {
//     return {
//       type: AuthActions.CLEAR_ERROR
//     }
//   }

// }