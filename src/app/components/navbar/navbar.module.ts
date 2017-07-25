import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
 ],
  exports: [NavbarComponent],
  declarations: [NavbarComponent],
  providers: [],
})
export class NavbarModule {

}