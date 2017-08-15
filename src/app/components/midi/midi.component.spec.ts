import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidiComponent } from './midi.component';
import { Store, StoreModule } from "@ngrx/store";
import { reducers } from "app/common/reducers";

describe('HomeComponent', () => {
  let component: MidiComponent;
  let fixture: ComponentFixture<MidiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MidiComponent ],
      providers: [
        StoreModule.forRoot(reducers)  
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
