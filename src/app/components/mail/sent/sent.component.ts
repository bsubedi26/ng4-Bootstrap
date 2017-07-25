import { Component } from '@angular/core';
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-mail-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css']
})
export class SentComponent {

  constructor(
    private store: Store<any>,
  ) { }

}
