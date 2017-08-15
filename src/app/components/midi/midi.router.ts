import { MidiComponent } from './midi.component';
import { Routes } from "@angular/router";

export const routerConfig: Routes = [
  {
    path: '',
    component: MidiComponent
  },
  {
    path: '/:id',
    component: MidiItemComponent
  },
]