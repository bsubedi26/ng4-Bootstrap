import { compose } from '@ngrx/core';

import { combineReducers, ActionReducer, Action, ActionReducerMap } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { storeLogger } from 'ngrx-store-logger';
import { localStorageSync } from 'ngrx-store-localstorage';

import { environment } from '../../../environments/environment';
import * as fromAuth from './auth.reducer';

export interface State {
  auth: fromAuth.IAuthState;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
};

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
const developmentReducer = [
  storeLogger(),
  // storeFreeze,
  localStorageSync({
    keys: ['auth'],
    rehydrate: true
  })
];

export const metaReducers: ActionReducer<any, any>[] = !environment.production ? 
  developmentReducer : 
  [];
