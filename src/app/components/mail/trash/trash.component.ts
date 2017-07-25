import { Component } from '@angular/core';
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-mail-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent {
  
  constructor(
    private store: Store<any>,
  ) { }

}