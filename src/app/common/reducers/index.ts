import { FeatherService } from 'app/common/services/feather.service';
import { compose } from '@ngrx/core';

import { combineReducers, ActionReducer, Action } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { storeLogger } from "ngrx-store-logger";

import { environment } from '../../../environments/environment';
import * as fromAuth from './auth.reducer';

const featherService = new FeatherService() 
const services = featherService.getServices()

services.todos.create({text: 'againdddd'})
// .then(res => console.log('done', res))
// .catch(res => console.log('err',res))

export interface State {
  auth: fromAuth.IAuthState;
}

const reducers = {
  auth: fromAuth.reducer,

  users: services.users.reducer,
  emails: services.emails.reducer,
  messages: services.messages.reducer,
  rooms: services.rooms.reducer,
  todos: services.todos.reducer,
};




// ------------------------------------------------------------------------------
// if environment is != from production
// use storeFreeze to avoid state mutation
const developmentReducer = compose(
  storeLogger(),
  storeFreeze,
  combineReducers
)(reducers);

const productionReducer = compose(combineReducers)(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}