import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserFormComponent
  ],
  exports: [
    UserFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class UserFormModule {
}
