import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login.component';
import { routerConfig } from './login.router';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routerConfig), SharedModule],
  declarations: [LoginComponent],
  providers: [],
})
export class LoginModule {

}