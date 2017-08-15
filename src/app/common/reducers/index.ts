import { compose } from '@ngrx/core';

import { combineReducers, ActionReducer, Action, ActionReducerMap } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { storeLogger } from 'ngrx-store-logger';
import { localStorageSync } from 'ngrx-store-localstorage';

import { environment } from '../../../environments/environment';
import customLogger from '../middlewares/logger';

import authReducer from './auth.reducer';
import userReducer from './user.reducer';
import mailReducer from './mail.reducer';
import IAuthState from '../states/auth.state';
import IUserState from '../states/user.state';

export interface State {
  // auth: authState;
  auth: IAuthState;
  user: IUserState;
  mail: any;
}

export const reducers: ActionReducerMap<State> = {
  auth: authReducer,
  user: userReducer,
  mail: mailReducer,
};

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
const developmentReducer = [
  // storeLogger(),
  customLogger,
  storeFreeze,
  localStorageSync({
    keys: ['auth'],
    rehydrate: true
  })
];

export const metaReducers: ActionReducer<any, any>[] = !environment.production ? 
  developmentReducer : 
  [];
