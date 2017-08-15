import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'mail-inbox-filter-buttons',
  templateUrl: './filter-buttons.component.html',
  // styleUrls: ['./inbox.component.css']
})
export class FilterButtonsComponent {

  filterOptions = [
    { name: 'Last 30 Days' },
    { name: 'Last 60 Days' },
    { name: 'Last 90 Days' },
    { name: 'All' },
  ]
  activeFilterTab: any;

  constructor(
    public store: Store<any>,
  ) {

  }

  filterBtnClick(name) {
    console.log(this)
    this.activeFilterTab = name;
    this.store.dispatch({ type: `INBOX_FILTER_CHANGE_TO_${this.activeFilterTab}`, payload: this.activeFilterTab })
  }


}
