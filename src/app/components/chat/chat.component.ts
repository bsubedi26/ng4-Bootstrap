import { DataService } from './../../common/services/data.service';
import { FeatherService } from './../../common/services/feather.service';
import { Http } from '@angular/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent {
  
  messages$: Observable<any[]>;
  users$: Observable<any[]>;
  rooms: Array<string> = ['fitness', 'entertainment', 'sports', 'news', 'culture', 'general'];
  activeRoom: string = 'general';
  retrievedMessages$: Observable<any>;

  constructor(private dataService: DataService, private _feathers: FeatherService) { }

  async handleRoomBtnClick(chatRoom: string) {
    const roomService = this._feathers.service('rooms');
    const messageService = this._feathers.service('messages');
    
    this.setActiveRoom(chatRoom);

    const roomDoc = await roomService.find({ query: { room: this.activeRoom } });
    const roomId = roomDoc[0]._id;
    console.log('ROOM ', roomId);

    this.retrievedMessages$ = messageService.find({ query: { roomId: roomId } })
      .then(response => response)
      .catch(response => console.log(response))

  }

  async ngOnInit() {
    const messageService = this._feathers.service('messages');
    const userService = this._feathers.service('users');
    const roomService = this._feathers.service('rooms');
    const roomDoc = await roomService.find({ query: { room: this.activeRoom }});
    const roomId = roomDoc[0]._id;

    this.retrievedMessages$ = messageService.find({ query: { roomId: roomId }})
      .then(response => response)
      .catch(response => console.log(response))

    this.users$ = userService.find()
      .then(response => response)
      .catch(response => console.log(response))

    messageService.on('created', (data) => {
      console.log('message created! ', data);
    })
    // this.retrievedMessages$.subscribe(res => console.log('DATA ', res))
    // get messages from data service
    // this.messages$ = this.dataService.messages$()
    //   // our data is paginated, so map to .data
    //   .map(m => m.data)
    //   // reverse the messages array, to have the most recent message at the end
    //   // necessary because we get a descendingly sorted array from the data service
    //   .map(m => m.reverse());

  }

  setActiveRoom(chatRoom: string) {
    this.activeRoom = chatRoom;
  }

  async sendMessage(message: string) {
    const messageService = this._feathers.service('messages');
    const roomService = this._feathers.service('rooms');

    const roomDoc = await roomService.find({ query: { room: this.activeRoom } });
    const roomId = roomDoc[0]._id;

    messageService.create({ text: message, roomId: roomId })
      .then(response => {
        
        console.log('subs response ', response)
        const newObservable = Observable.of(response)
        
        console.log('PRE ', newObservable)

        // this.retrievedMessages$ = new Observable(observer => {
        //   observer.next(response);
        //   console.log('POST  ', this.retrievedMessages$)
          
        // })
      })
      // .then(response => console.log('.then created message'))
      // .catch(response => console.log(response))
    
    // this.dataService.sendMessage(message, this.activeRoom)
    //   .then(response => console.log(response))
    //   .catch(response => console.log(response))
  }

  logOut() {
    this._feathers.logout();
  }


}
