import { Router } from '@angular/router';
import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AuthActions } from '../actions/auth.actions';
import { FeatherService } from "app/common/services/feather.service";

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/delay';


function simulateHttp(val: any, delay: number) {
  return Observable.of(val).delay(delay) 
}

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private featherService: FeatherService, public router: Router, private _authActions: AuthActions, private store: Store<any>) { }

  private _navigate(path) {
    return this.router.navigate(path);
  }
  private _dispatch(action) {
    this.store.dispatch(action)
  }

  // @Effect({ dispatch: false })
  @Effect()
  loginUser$: Observable<Action> = this.actions$
    .ofType(AuthActions.LOGIN_USER)
    .map(action => action.payload)
    .switchMap((payload) => {
      const { email, password } = payload;

      return this.featherService.authenticate({ strategy: 'local', email, password })
        .then(res => res)
        .catch(res => res)
     
      // try {
      //   const loginResponse = await this.featherService.authenticate({ strategy: 'local', email, password })
      //   this._dispatch(this._authActions.loginUserSuccess(loginResponse))
      //   return;
      // } catch (error) {
      //   this._dispatch(this._authActions.loginUserError(error))
      //   return;
      // }
    })


  @Effect({ dispatch: false })
  navigateAfterLogin$: Observable<Action> = this.actions$
    .ofType(AuthActions.LOGIN_USER_SUCCESS)
    // .do is like a map except it always returns exactly what it was given
    .do(() => this._navigate(['/mail']))
    
  @Effect({ dispatch: false })
  navigateAfterUserCreate$: Observable<Action> = this.actions$
    .ofType(AuthActions.CREATE_USER_SUCCESS)
    // .do is like a map except it always returns exactly what it was given
    .do(() => this._navigate(['/login']))




}