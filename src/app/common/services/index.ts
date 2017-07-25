import { TodoService } from './todo.service';
import { DataService } from './data.service';
import { FeatherService } from './feather.service';
import { MailService } from './mail.service';
import { AuthService } from './auth.service';

import { AuthGuard } from './auth.guard';

export const AllServices = [
  FeatherService,
  DataService,
  AuthGuard,
  TodoService,
  MailService,
  AuthService
];
