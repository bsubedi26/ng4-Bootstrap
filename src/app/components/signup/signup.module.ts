import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { SignupComponent } from './signup.component';
import { routerConfig } from './signup.router';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routerConfig), SharedModule],
  declarations: [SignupComponent],
  providers: [],
})
export class SignupModule {

}