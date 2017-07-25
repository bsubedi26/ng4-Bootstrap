import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import * as feathers from 'feathers/client';
import * as feathersRx from 'feathers-reactive';
import * as io from 'socket.io-client';
import * as hooks from 'feathers-hooks';
import * as socketio from 'feathers-socketio/client';
import * as authentication from 'feathers-authentication-client';

// TS Lint will complain here. Unfortunately feathers-reactive needs the entire Rx object passed on creation.
import * as Rx from 'rxjs';
import reduxifyServices from 'feathers-redux';


/**
 * Simple wrapper for feathers
 */
@Injectable()
export class FeatherService {
  // There are no proper typings available for feathers, due to its plugin-heavy nature
  private _feathers: any;
  private _socket: any;
  public services: any;

  constructor(private store?: Store<any>) {
    this._socket = io('http://localhost:3030');       // init socket.io

    this._feathers = feathers();                      // init Feathers
    this._feathers.configure(hooks());                // add hooks plugin
    // this._feathers.configure(feathersRx(Rx));         // add feathers-reactive plugin
    this._feathers.configure(socketio(this._socket)); // add socket.io plugin
    this._feathers.configure(authentication({         // add authentication plugin
      storage: window.localStorage
    }));

    this.services = reduxifyServices(this._feathers, ['users', 'emails', 'messages', 'rooms', 'todos']);
    // console.log('redux service: ', this.services)
    
  }

  public createTodo(input?) {
    this.store.dispatch(this.services.users.find('ss'))
  }

  public getServices() {
    return this.services;

  }

  // expose services
  public service(name: string) {
    return this._feathers.service(name);
  }

  // expose authentication
  authenticate(credentials?): Promise<Object> {
    return this._feathers.authenticate(credentials);
  }

  public async decodeToken(response) {
    return this._feathers.passport.verifyJWT(response.accessToken);
  }

  // expose logout
  public logout() {
    return this._feathers.logout();
  }


  getUser() {
    return this._feathers.get('user')
  }

  getToken(): Promise<any> {
    return this._feathers.get('token')
  }

  isLogin() {
    return this.getUser() ? true : false
  }

}
