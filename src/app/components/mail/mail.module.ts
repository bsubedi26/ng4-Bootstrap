import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { routerConfig } from './mail.router';

import { MailComponent } from './mail.component';
import { InboxComponent } from './inbox/inbox.component';
import { StarredComponent } from './starred/starred.component';
import { SentComponent } from './sent/sent.component';
import { SpamComponent } from'./spam/spam.component';
import { TrashComponent } from './trash/trash.component';
import { MailNavbarComponent } from './mail-navbar/mail-navbar.component';
import { FilterButtonsComponent } from "app/components/mail/inbox/filter-buttons/filter-buttons.component";

import { MockData } from './inbox/mock-data/mock-data';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    RouterModule.forChild(routerConfig)
],
  exports: [],
  declarations: [
    MockData,

    MailComponent,

    InboxComponent,
    StarredComponent,
    SentComponent,
    SpamComponent,
    TrashComponent,
    MailNavbarComponent,
    FilterButtonsComponent
    
  ],
  providers: [],
})
export class MailModule {}