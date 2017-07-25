import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  navigations: Array<any> = [
    { path: 'home', name: 'Home' },
    { path: 'login', name: 'Login' },
    { path: 'signup', name: 'Signup' },
    // { path: 'chat', name: 'Chat' },
    { path: 'mail', name: 'Mail' },
  ]
  constructor() { }

  ngOnInit() {
  }

}
