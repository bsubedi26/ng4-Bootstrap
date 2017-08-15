import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-mail-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  
  mailData$: Observable<any>;
  mailData: Object;


  constructor(
    public store: Store<any>,
  ) { 
    this.mailData$ = store.select(state => state.mail)
  }

  ngOnInit() {
    this.mailData$.subscribe(mail => {
      const { inbox } = mail;
      this.mailData = inbox;
    })
  }
 

}
