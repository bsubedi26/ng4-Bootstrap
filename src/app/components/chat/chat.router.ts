import { ChatComponent } from './chat.component';
import { Routes } from '@angular/router';
import { AuthGuard } from 'app/app.guard';

export const routerConfig: Routes = [
  {
    path: '',
    component: ChatComponent,
    canActivate: [AuthGuard]
  },

];
