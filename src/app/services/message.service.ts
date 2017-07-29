import { FeatherService } from '../providers/feather.service';
import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  messageService: any;

  constructor(private featherService: FeatherService) {
    this.messageService = featherService.service('messages')
    // this.userService.on('created', (user) => this.onCreated(user));
  }

  public on(event: string, cb: Function) {
    this.messageService.on(event, cb)
  }

  public create(input): Promise<any> {
    return this.messageService.create(input)
  }

  public find(input): Promise<any> {
    return this.messageService.find(input)
  }

}
