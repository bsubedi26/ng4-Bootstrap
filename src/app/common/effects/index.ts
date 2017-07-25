import { AuthEffects } from './auth.effects';
import { ModuleWithProviders } from '@angular/core/src/core';
import { EffectsModule } from '@ngrx/effects';

export const AllEffects: ModuleWithProviders[] = [
  EffectsModule.run(AuthEffects)
];