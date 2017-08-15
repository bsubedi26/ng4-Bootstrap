import { AuthGuard } from 'app/app.guard';
import { TodoService } from './todo.service';
import { DataService } from './data.service';
import { MailMockService } from './mail.service';

export const AllServices = [
  DataService,
  AuthGuard,
  TodoService,
  MailMockService
  // MailService,
  // UserService,
  // MessageService,
  // RoomService
];
