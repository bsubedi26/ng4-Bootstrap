import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { ChatComponent } from './chat.component';
import { routerConfig } from './chat.router';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routerConfig), SharedModule],
  declarations: [ChatComponent],
  providers: [],
})
export class ChatModule {

}