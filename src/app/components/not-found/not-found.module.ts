import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { NotFoundComponent } from './not-found.component';
import { routerConfig } from './not-found.router';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routerConfig), SharedModule],
  declarations: [NotFoundComponent],
  providers: [],
})
export class NotFoundModule {

}