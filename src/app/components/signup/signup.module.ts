import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { SignupComponent } from './signup.component';
import { routerConfig } from './signup.router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild(routerConfig), 
    ReactiveFormsModule,
    SharedModule],
  declarations: [SignupComponent],
  providers: [],
})
export class SignupModule {

}