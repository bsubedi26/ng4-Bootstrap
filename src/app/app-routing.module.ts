import { Routes } from '@angular/router';

export const routerConfig: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: 'app/components/home/home.module#HomeModule'
  },
  {
    path: 'login',
    loadChildren: 'app/components/login/login.module#LoginModule'
  },
  {
    path: 'signup',
    loadChildren: 'app/components/signup/signup.module#SignupModule'
  },
  {
    path: 'not-found',
    loadChildren: 'app/components/not-found/not-found.module#NotFoundModule'
  },
  {
    path: 'mail',
    loadChildren: 'app/components/mail/mail.module#MailModule'
  },
  {
    path: 'chat',
    loadChildren: 'app/components/chat/chat.module#ChatModule'
  },

];
