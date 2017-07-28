import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import * as feathers from 'feathers/client';
import * as feathersRx from 'feathers-reactive';
import * as io from 'socket.io-client';
import * as hooks from 'feathers-hooks';
import * as socketio from 'feathers-socketio/client';
import * as authentication from 'feathers-authentication-client';

// TS Lint will complain here. Unfortunately feathers-reactive needs the entire Rx object passed on creation.
// import * as Rx from 'rxjs';

/**
 * Simple wrapper for feathers
 */
@Injectable()
export class FeatherService {
  private _feathers: any;
  private _socket: any;
  
  constructor() {
    this._socket = io('http://localhost:3030');       // init socket.io
    this._feathers = feathers();                      // init Feathers
    this._feathers.configure(hooks());                // add hooks plugin
    // this._feathers.configure(feathersRx(Rx));         // add feathers-reactive plugin
    this._feathers.configure(socketio(this._socket)); // add socket.io plugin
    this._feathers.configure(authentication({         // add authentication plugin
      storage: window.localStorage
    }));

  }

  // expose services
  public service(name: string) {
    return this._feathers.service(name);
  }

  // expose authentication (login)
  authenticate(credentials?): Promise<Object> {
    return this._feathers.authenticate(credentials);
  }

  // expose logout (signout)
  public logout() {
    return this._feathers.logout();
  }

  // expose decodeToken (returns user credentials associated with jwt)
  public decodeToken(token) {
    return this._feathers.passport.verifyJWT(token);
  }

}
