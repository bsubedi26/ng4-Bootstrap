import { Router } from '@angular/router';
import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import * as authActions from '../actions/auth.actions';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/delay';
import { AuthService } from 'app/services/authentication.service';


function simulateHttp(val: any, delay: number) {
  return Observable.of(val).delay(delay)
}

@Injectable()
export class AuthEffects {


  @Effect({ dispatch: false })
  navigateAfterLogin$: Observable<Action> = this.actions$
    .ofType(authActions.LOGIN_SUCCESS)
    // .do is like a map except it always returns exactly what it was given
    .do((action: any) => {
      this._navigate(['/mail'])
    })

  @Effect({ dispatch: false })
  navigateAfterUserCreate$: Observable<Action> = this.actions$
    .ofType(authActions.CREATE_USER_SUCCESS)
    .do(() => this._navigate(['/login']))


  @Effect({ dispatch: false })
  userLogout$: Observable<Action> = this.actions$
    .ofType(authActions.LOGOUT)
    .do(() => {
      this.authService.logout();
      this._navigate(['/login']);
    })


  constructor(
    private actions$: Actions, 
    public router: Router, 
    private authService: AuthService,
    private store: Store<any>
  ) { }

  private _navigate(path) {
    return this.router.navigate(path);
  }
  private _dispatch(action) {
    this.store.dispatch(action)
  }

};
