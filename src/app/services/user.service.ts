import { FeatherService } from '../providers/feather.service';
import { Injectable } from '@angular/core';


@Injectable()
export class UserService {

  userService: any;

  constructor(private featherService: FeatherService) {
    this.userService = featherService.service('users')
    // this.userService.on('created', (user) => this.onCreated(user));

  }

  public on(event: string, cb: Function) {
    this.userService.on(event, cb)
  }

  public create(input): Promise<any> {
    return this.userService.create(input)
  }

  public find(input?): Promise<any> {
    return this.userService.find(input)
  }

}
