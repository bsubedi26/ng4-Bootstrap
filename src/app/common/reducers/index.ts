import { FeatherService } from 'app/common/services/feather.service';
import { compose } from '@ngrx/core';

import { combineReducers, ActionReducer, Action, ActionReducerMap } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { storeLogger } from 'ngrx-store-logger';

import { environment } from '../../../environments/environment';
import * as fromAuth from './auth.reducer';

const featherService = new FeatherService() 
const services = featherService.getServices()

// services.todos.create({text: 'againdddd'})
// .then(res => console.log('done', res))
// .catch(res => console.log('err',res))

export interface State {
  auth: fromAuth.IAuthState;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
  // users: services.users.reducer,
  // emails: services.emails.reducer,
  // messages: services.messages.reducer,
  // rooms: services.rooms.reducer,
  // todos: services.todos.reducer,
};

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
const developmentReducer = [
  storeLogger(),
  storeFreeze
];

export const metaReducers: ActionReducer<any, any>[] = !environment.production ? developmentReducer : [];
