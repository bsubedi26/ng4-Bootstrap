import { Component } from '@angular/core';
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-mail-starred',
  templateUrl: './starred.component.html',
  styleUrls: ['./starred.component.css']
})

export class StarredComponent {
  
  constructor(
    private store: Store<any>,
  ) { }

}

