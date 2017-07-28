import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MailService } from 'app/services/mail.service';

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

  authState: any;
  activeRoute: any;
  messages: Array<any> = [];
  

  constructor(
    private store: Store<any>,
    private router: Router,
    private mailService: MailService,
  ) {
    this.store.select(state => state.auth)
    .subscribe(auth => this.authState = auth)
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
    this.emailFrom = this.authState.user.email;
  }

}
