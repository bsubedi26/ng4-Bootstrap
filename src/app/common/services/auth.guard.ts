import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FeatherService } from './feather.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private _feathers: FeatherService) {}

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    /* Try to auth with the server. If authed resolve to true, else resolve to false */
    return this._feathers
      .authenticate()
      .then(() => true)
      .catch(() => {
        this.router.navigate(['/login']);
        return false;
      });
  }
}
