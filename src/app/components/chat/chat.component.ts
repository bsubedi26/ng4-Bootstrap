import { DataService } from 'app/services/data.service';
import { FeatherService } from 'app/providers/feather.service';
import { Http } from '@angular/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MessageService } from 'app/services/message.service';
import { RoomService } from 'app/services/room.service';
import { UserService } from 'app/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent implements OnInit {

  messageForm: FormGroup;
  messages: Array<any> = [];
  users: Array<any>;
  currentUser: any;
  rooms: Array<string> = ['fitness', 'entertainment', 'sports', 'news', 'culture', 'general'];
  activeRoom = 'general';
  activeRoomId: string;

  constructor(
    private dataService: DataService,
    private _feathers: FeatherService,
    private messageService: MessageService,
    private roomService: RoomService,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    this.messageForm = this.formBuilder.group({
      message: [null, Validators.required]
    });
  }

  initEventListeners(): void {
    this.messageService.on('created', (message) => {
      console.log('onCreated! message ', message)
      console.log(message.roomId === this.activeRoomId)
      if (message.roomId === this.activeRoomId) {
        this.messages.push(message)
      }
    })
  }

  async ngOnInit() {
    this.initEventListeners();
    // authenticate before query (HACK FIX for browser refreshes)
    const authResponse: any = await this._feathers.authenticate()
    this.currentUser = authResponse.user
    this.users = await this.userService.find()
  }

  async handleSendMessage(formValues) {
    const { message } = formValues;
    // find the room id associated with the incoming form message
    const roomDoc = await this.roomService.find({ query: { room: this.activeRoom } });
    this.activeRoomId = roomDoc[0]._id;

    await this.messageService.create({ text: message, roomId: this.activeRoomId })
  }

  async handleRoomBtnClick(chatRoom: string) {
    this.activeRoom = chatRoom;

    const roomDoc = await this.roomService.find({ query: { room: this.activeRoom } });
    this.activeRoomId = roomDoc[0]._id;
    console.log('ROOM ', this.activeRoomId);
    this.messages = await this.messageService.find({ query: { roomId: this.activeRoomId } })
  }

  logOut() {
    this._feathers.logout();
  }


}
