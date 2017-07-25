import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-mail-spam',
  templateUrl: './spam.component.html',
  styleUrls: ['./spam.component.css']
})
export class SpamComponent {

  constructor(
    private store: Store<any>,
  ) { }

}