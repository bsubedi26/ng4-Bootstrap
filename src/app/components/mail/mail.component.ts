import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FeatherService } from "app/providers/feather.service";

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit { 
  emailFrom: any;
  emailTo: any;
  emailSubject: any;
  navigations: Array<any> = [
    { path: 'inbox', name: 'Inbox' },
    { path: 'starred', name: 'Starred' },
    { path: 'sent', name: 'Sent' },
    { path: 'spam', name: 'Spam' },
    { path: 'trash', name: 'Trash' },
  ]

  mailService: any;
  userState: any;
  activeRoute: any;
  messages: Array<any> = [];
  

  constructor(
    private store: Store<any>,
    private router: Router,
    featherService: FeatherService,
  ) {
    this.mailService = featherService.service('emails')
    this.store.select(state => state.user)
    .subscribe(response => this.userState = response)
  }

  handleRouteClick(routeClicked) {
    this.activeRoute = routeClicked;
    const goToRoute = `mail/${routeClicked.path}`
    this.router.navigate([goToRoute]);
  }

  handleSendEmail(emailBody) {
    const parameters = {
      fromEmail: this.emailFrom,
      toEmail: this.emailTo,
      subject: this.emailSubject,
      body: emailBody
    }

    this.mailService.create(parameters)
    .then(response => {
      console.log(response)
      const message = `Successfully sent message to ${response.toEmail}`
      this.messages.unshift(message)
    })
    .catch(response => {
      console.log(JSON.stringify(response))
      console.log(Object.keys(response))
      this.messages.unshift(response.message)
    })
  }

  ngOnInit() {
    this.emailFrom = this.userState.credentials.email;
  }

}
