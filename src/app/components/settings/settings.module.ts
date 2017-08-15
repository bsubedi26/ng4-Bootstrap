import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { SettingsComponent } from './settings.component';
import { routerConfig } from './settings.router';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routerConfig), SharedModule],
  declarations: [SettingsComponent],
  providers: [],
})
export class SettingsModule {

}