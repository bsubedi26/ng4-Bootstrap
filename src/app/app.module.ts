import { SharedModule } from './components/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarModule } from './components/navbar/navbar.module';

import { reducer } from './common/reducers';
import { AllActions } from './common/actions';
import { AllEffects } from './common/effects';
import { AllServices } from './common/services';

import { routerConfig } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routerConfig),

    NgbModule.forRoot(),
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    AllEffects,
    SharedModule,
    NavbarModule

  ],
  providers: [
    AllServices,
    AllActions
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
