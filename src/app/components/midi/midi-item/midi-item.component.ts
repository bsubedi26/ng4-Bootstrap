import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-midi-item',
  templateUrl: './midi-item.component.html',
  // styleUrls: ['./midi.component.css']
})
class MidiItemComponent {

  constructor(public route: ActivatedRoute) {
    console.log(this.route)
  }
}

export default MidiItemComponent;