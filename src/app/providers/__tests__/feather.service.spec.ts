import { TestBed, inject } from '@angular/core/testing';

import { FeatherService } from '../feather.service';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from 'app/common/reducers';

describe('FeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FeatherService,

      ]
    });
  });

  it('should ...', inject([FeatherService], (service: FeatherService) => {
    expect(service).toBeTruthy();
  }));
});
