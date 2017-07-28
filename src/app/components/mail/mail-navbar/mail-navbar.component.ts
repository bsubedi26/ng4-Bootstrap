import { MailService } from 'app/services/mail.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-navbar',
  templateUrl: './mail-navbar.component.html',
  styleUrls: ['./mail-navbar.component.css']
})
export class MailNavbarComponent implements OnInit {
  navigations: Array<any> = [
    { path: 'inbox', name: 'Inbox' },
    { path: 'starred', name: 'Starred' },
    { path: 'sent', name: 'Sent' },
    { path: 'spam', name: 'Spam' },
    { path: 'trash', name: 'Trash' },
  ]

  activeRoute: any;
  authState: any;
  user: any = 'initialvalue';
  userInbox: any;

  constructor(
    private store: Store<any>,
    private router: Router,
    private mailService: MailService
  ) { 

  }

  check() {
    console.log(this)
  }

  handleRouteClick(routeClicked) {
    this.activeRoute = routeClicked;
    const goToRoute = `mail/${routeClicked.path}`
    this.router.navigate([goToRoute]);
  }

  ngOnInit() {
    // this.mailService.find({ query: { toUserId: this.authState.user._id } })
    // .then(response => {
    //   this.userInbox = response
    // })
    // .catch(error => {
    //   console.log('ERROR ', error)
    // })
  }
}
