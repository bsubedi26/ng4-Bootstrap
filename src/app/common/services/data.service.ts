import { Injectable } from '@angular/core';
import { FeatherService } from './feather.service';

/**
 *  Abstraction layer for data management
 *  Technically this isn't needed for feathers-chat,
 *  but you will need it for more complex tasks.
 */
@Injectable()
export class DataService {
  constructor(private feathers: FeatherService) {
  }

  async getMessages(room) {
    try {
      const roomDoc = await this.feathers.service('rooms').find({ query: { room: room }})
      console.log('roomdoc ', roomDoc)
      if (roomDoc[0]) {
        const roomId = roomDoc[0]._id;
        const messages = await this.feathers.service('messages')
        .find({
          query: {
            roomId
          }
        })

        return messages;
      }

      return 'No messages found.';
      
    } catch (e) { throw e };
    
  }

  createRoom(room): Promise<Object> {
    return this.feathers
      .service('rooms')
      .create({
        room: room
      });
  }

  messages$() {
    // just returning the observable will query the backend on every subscription
    // using some caching mechanism would be wise in more complex applications
    return this.feathers
      .service('messages')
      .find({
        query: {
          $sort: {createdAt: -1},
          $limit: 25
        }
      });
  }

  users$() {
    // just returning the observable will query the backend on every subscription
    // using some caching mechanism would be wise in more complex applications
    return this.feathers
      .service('users')
      .find();
  }

  async sendMessage(message: string, roomName: string): Promise<any> {
    try {
      const roomDoc = await this.feathers.service('rooms').find({ query: { room: roomName } });
      const roomId = roomDoc[0]._id;

      return await this.feathers.service('messages').create({
          text: message,
          roomId: roomId
        });

    } catch (e) { throw e };
   
  }
}
