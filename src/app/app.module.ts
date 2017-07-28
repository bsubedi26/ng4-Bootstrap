import { SharedModule } from './components/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarModule } from './components/navbar/navbar.module';

import { reducers, metaReducers } from './common/reducers';
import { AllEffects } from './common/effects';
import { AllServices } from './services';

import { routerConfig } from './app-routing.module';
import { AllProviders } from 'app/providers';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routerConfig),

    NgbModule.forRoot(),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    }),
    AllEffects,
    SharedModule,
    NavbarModule

  ],
  providers: [
    AllServices,
    AllProviders
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
