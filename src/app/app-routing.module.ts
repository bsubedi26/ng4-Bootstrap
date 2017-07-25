import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from './components/chat/chat.component';
import { AuthGuard } from './common/services/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';

import { MailComponent } from './components/mail/mail.component';
import { InboxComponent } from './components/mail/inbox/inbox.component';
import { StarredComponent } from './components/mail/starred/starred.component';
import { SentComponent } from './components/mail/sent/sent.component';
import { SpamComponent } from './components/mail/spam/spam.component';
import { TrashComponent } from './components/mail/trash/trash.component';
import { NotFoundComponent } from "app/components/not-found/not-found.component";

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