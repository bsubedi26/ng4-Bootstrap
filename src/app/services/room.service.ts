import { FeatherService } from '../providers/feather.service';
import { Injectable } from '@angular/core';

@Injectable()
export class RoomService {

  roomService: any;

  constructor(private featherService: FeatherService) {
    this.roomService = featherService.service('rooms')
    // this.userService.on('created', (user) => this.onCreated(user));
  }

  public on(event: string, cb: Function) {
    this.roomService.on(event, cb)
  }

  public create(input): Promise<any> {
    return this.roomService.create(input)
  }

  public find(input): Promise<any> {
    return this.roomService.find(input)
  }

  public createRoom(room): Promise<Object> {
    return this.roomService.create({ room: room });
  }

}
