import { TodoService } from './todo.service';
import { DataService } from './data.service';
import { MailService } from './mail.service';
import { AuthService } from './authentication.service';
import { UserService } from './user.service';
import { MessageService } from './message.service';
import { RoomService } from './room.service';

import { AuthGuard } from 'app/app.guard';

export const AllServices = [
  DataService,
  AuthGuard,
  TodoService,
  MailService,
  AuthService,
  UserService,
  MessageService,
  RoomService
];
