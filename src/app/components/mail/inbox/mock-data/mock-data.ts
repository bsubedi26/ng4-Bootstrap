import { Component, Input } from '@angular/core';

@Component({
  selector: 'mail-inbox-mock-data',
  templateUrl: './mock-data.html',
})
export class MockData {

  @Input() mailStateData: any;

  constructor() {

  }

}
