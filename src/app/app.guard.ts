import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FeatherService } from './providers/feather.service';
import { Store } from '@ngrx/store';


@Injectable()
export class AuthGuard implements CanActivate {
  // auth$: Observable<any>;
  // isLoggedIn: any;

  constructor(private router: Router, private _feathers: FeatherService, private store: Store<any>) {
    // this.auth$ = this.store.select('auth');

    // this.auth$.subscribe(auth => {
    //   console.log('$auth guard service => ', auth)
    //   this.isLoggedIn = auth.isLoggedIn
    // })
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // if (this.isLoggedIn) {
    if (window.localStorage.getItem('feathers-jwt')) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
    // /* Try to auth with the server. If authed resolve to true, else resolve to false */
    // return this._feathers
    //   .authenticate()
    //   .then(() => true)
    //   .catch(() => {
    //     this.router.navigate(['/login']);
    //     return false;
    //   });
  }
}
