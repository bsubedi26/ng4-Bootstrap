import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { routerConfig } from './home.router';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routerConfig), SharedModule],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule {

}