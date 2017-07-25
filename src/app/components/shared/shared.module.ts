import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';


@NgModule({
  imports: [CommonModule],
  exports: [CardComponent],
  declarations: [CardComponent],
  providers: [],
})

export class SharedModule {}