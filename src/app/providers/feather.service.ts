import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import * as feathers from 'feathers/client';
import * as feathersRx from 'feathers-reactive';
import * as io from 'socket.io-client';
import * as hooks from 'feathers-hooks';
import * as socketio from 'feathers-socketio/client';
import * as authentication from 'feathers-authentication-client';
import * as rest from 'feathers-rest/client';
import { Http, Headers, RequestOptions } from '@angular/http';

/**
 * Simple wrapper for feathers client
 */
@Injectable()
export class FeatherService {
  private _feathers: any;
  private _restClient: any;
  private _socket: any;
  private httpOptions: Headers;

  constructor(angularHttp: Http) {
    // this._socket = io('http://localhost:3030');       // init socket.io
    this._feathers = feathers();                      // init Feathers
    this._feathers.configure(hooks());                // add hooks plugin
    // this._feathers.configure(feathersRx(Rx));         // add feathers-reactive plugin
    // this._feathers.configure(socketio(this._socket)); // add socket.io plugin
    // this._feathers.configure(authentication({         // add authentication plugin
    //   storage: window.localStorage
    // }));

    // this._restClient = rest('http://localhost:3030')
    // this.httpOptions = new Headers()
    // this.httpOptions.append('Content-Type', 'application/json');
    // const options = new RequestOptions({ headers: this.httpOptions });
    // this._feathers.configure(this._restClient.angular(angularHttp, options))

  }

  // expose service
  // public getService(name, method) {
  //   const returnedService = this._feathers.service(name);

  //   switch(method) {
  //     case 'getAll': {
  //       return returnedService.find()
  //     }
  //     case 'create': {
        // return returnedService.create(input)
  //     }
  //   }
  // }
  public service(name: string) {
    return this._feathers.service(name);
  }

  public on(event: string, cb: Function) {
    this._feathers.on(event, cb)
  }

  ///////////////////////AUTH///////////////////////////
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
