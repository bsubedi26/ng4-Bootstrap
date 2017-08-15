import { FeatherService } from 'app/providers/feather.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as authActions from 'app/common/actions/auth.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  
  loggedInNavigations: Array<any> = [
    { path: 'home', name: 'Home' },
    { path: 'mail', name: 'Mail' },
    { path: 'chat', name: 'Chat' },
    { path: 'settings', name: 'Account Settings' },
    { path: 'midi', name: 'Midi Library' },
  ]

  visitorNavigations: Array<any> = [
    { path: 'home', name: 'Home' },
    { path: 'login', name: 'Login' },
    { path: 'signup', name: 'Signup' },
    { path: 'mail', name: 'Mail' },
    { path: 'chat', name: 'Chat' },
    { path: 'midi', name: 'Midi Library' },
  ]

  constructor(private store: Store<any>, private featherService: FeatherService) {
    
   }

   handleLogout() {
    this.store.dispatch(new authActions.Logout())
   }

  ngOnInit() {
    this.store.select('auth').subscribe(auth => {
      this.isLoggedIn = auth.isLoggedIn;
    })
  }

}
