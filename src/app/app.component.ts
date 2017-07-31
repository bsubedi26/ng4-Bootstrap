import { FeatherService } from './../providers/feather.service';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;
  userService: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, featherService: FeatherService) {

    platform.ready().then(() => {
      // After platform is ready, configure higher level native functionality here
      // statusBar.styleDefault();
      // splashScreen.hide();
    });


    // this.userService = featherService.service("users")
    // const randomCredentials = this.generateRandomCredentials()
    // this.userService.create(randomCredentials)
    // .then(response => console.log('.then ', response))
    // .catch(response => console.log(response))

  }

  generateRandomCredentials() {
    const randomNumber = Math.random() * 10000
    return {
      email: randomNumber.toString(),
      password: randomNumber.toString()
    }
  }





}
