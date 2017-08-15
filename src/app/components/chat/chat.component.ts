import { DataService } from 'app/services/data.service';
import { FeatherService } from 'app/providers/feather.service';
import { Http } from '@angular/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
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

  messageService: any;
  roomService: any;
  userService: any;

  constructor(
    private dataService: DataService,
    private featherService: FeatherService,
    private formBuilder: FormBuilder
  ) {
    this.messageService = featherService.service('messages');
    this.roomService = featherService.service('rooms');
    this.userService = featherService.service('users');
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
    const authResponse: any = await this.featherService.authenticate()
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
    this.featherService.logout();
  }


}
