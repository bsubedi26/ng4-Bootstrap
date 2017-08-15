import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CapitalizeFirstPipe } from './pipes/capitalize-first.pipe';
import { RemoveFileExtensionPipe } from './pipes/remove-file-extension.pipe';
import { RemoveUnderscores } from './pipes/remove-underscores.pipe';
import { RemoveDashes } from './pipes/remove-dashes.pipe';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    CardComponent,
    UserFormComponent,
    CapitalizeFirstPipe,
    RemoveFileExtensionPipe,
    RemoveUnderscores,
    RemoveDashes
  ],
  declarations: [
    CardComponent,
    UserFormComponent,
    CapitalizeFirstPipe,
    RemoveFileExtensionPipe,
    RemoveUnderscores,
    RemoveDashes
  ],
  providers: [],
})

export class SharedModule {}