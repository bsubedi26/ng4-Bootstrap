import { FeatherService } from './feather.service';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthService {

  authService: any;

  constructor(private featherService: FeatherService) {
    this.authService = featherService.service('authentication')
  }

  authenticateLogin(credentials): Promise<Object> {
    return this.featherService.authenticate(credentials)
  }

  public create(input) {
    console.log('test', input)
    return this.authService.create(input)
    // return this.authService.create(input)
  }

  public find(input) {
    return this.authService.find(input)
  }

}