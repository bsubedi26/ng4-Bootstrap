import { MailService } from 'app/services/mail.service';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  
  authState: any;
  user: any = 'initialvalue';
  userInbox: any;

  constructor(
    private store: Store<any>,
    private mailService: MailService
  ) { 
    this.store.select(state => state.auth)
      .map(each => console.log('eacc', each))
      .delay(10000)
      .subscribe((state: any) => this.user = state.user.email)
      // .subscribe(auth => {
      //   console.log('aa', auth)
      // })
  }

  check() {
    console.log(this)
    // this.store.dispatch({ type: 'CHANGE_AUTH_TEST' })
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
