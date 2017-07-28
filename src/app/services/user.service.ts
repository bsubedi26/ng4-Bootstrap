import { FeatherService } from '../providers/feather.service';
import { Injectable } from '@angular/core';


@Injectable()
export class UserService {

  userService: any;

  constructor(private featherService: FeatherService) {
    this.userService = featherService.service('users')
  }

  public create(input): Promise<any> {
    return this.userService.create(input)
  }

  public find(input): Promise<any> {
    return this.userService.find(input)
  }

}
