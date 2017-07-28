import { FeatherService } from '../providers/feather.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AuthService {

  constructor(private featherService: FeatherService) {

  }

  // expose authentication (login)
  authenticate(credentials?): Promise<Object> {
    return this.featherService.authenticate(credentials);
  }

  // expose logout (signout)
  public logout() {
    return this.featherService.logout();
  }

  // expose decodeToken (returns user credentials associated with jwt)
  public async decodeToken(response) {
    return await this.featherService.decodeToken(response);
  }

};
