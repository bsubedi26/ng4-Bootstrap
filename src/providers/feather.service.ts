import { Injectable } from '@angular/core';

import * as feathers from 'feathers/client';
import * as io from 'socket.io-client';
import * as hooks from 'feathers-hooks';
import * as socketio from 'feathers-socketio/client';
import * as rest from 'feathers-rest/client';
import * as axios from 'axios';
// import * as authentication from 'feathers-authentication-client';

/**
 * Simple wrapper for feathers client
 */
@Injectable()
export class FeatherService {
  private app: any;
  private _socket: any;
  private _restClient: any;

  constructor() {
    console.log('init feathers.service...');
    this.app = feathers();                      // init Feathers
    this.app.configure(hooks());                // add hooks plugin
    this.app.configure(rest('http://localhost:3030').axios(axios)); // setup REST with axios as transport
    // this._socket = io('http://localhost:3030');       // init socket.io
    // this.app.configure(socketio(this._socket)); // add socket.io plugin
    // this.app.configure(authentication({         // add authentication plugin
    //   storage: window.localStorage
    // }));

    this._restClient = rest('http://localhost:3030')
    console.log('this._restClient ', this._restClient)
    
  }

  public getRestClient() {
    return this._restClient;
  }

  // expose services
  public service(name: string) {
    return this.app.service(name);
  }

  // expose authentication (login)
  authenticate(credentials?): Promise<Object> {
    return this.app.authenticate(credentials);
  }

  // expose logout (signout)
  public logout() {
    return this.app.logout();
  }

  // expose decodeToken (returns user credentials associated with jwt)
  public decodeToken(token) {
    return this.app.passport.verifyJWT(token);
  }

}
