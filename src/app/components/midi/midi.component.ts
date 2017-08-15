import { FeatherService } from 'app/providers/feather.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-midi',
  templateUrl: './midi.component.html',
  styleUrls: ['./midi.component.css']
})
export class MidiComponent implements OnInit {
  midiService: any;
  midiFiles: any;
  error: any;
  genres = [];
  activeGenreTab = 'blues';
  filteredResults: any;
  downloadUrl = `assets/midi/${this.activeGenreTab}/`
  
  constructor (
    public featherService: FeatherService
  ) {
    this.midiService = featherService.service('midi');
  }

  ngOnInit() {
    
    this.midiService.find()
    .then(midiFiles => {
      midiFiles.forEach(midiFile => {
        if (!this.genres.includes(midiFile.genre)) {
          this.genres.push(midiFile.genre)
        }
      })
    })
    .catch(error => this.error = error)
  }

  filterBtnClick(genre) {
    this.activeGenreTab = genre;
    this.downloadUrl = `assets/midi/${this.activeGenreTab}/`
    
    this.filteredResults = this.midiFiles.filter(file => file.genre === genre);
  }

  downloadClick(item) {
    this.midiService.get(item._id)
    .then(res => console.log(res))
    .catch(res => console.log(res))
  }


}
