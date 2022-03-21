import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEditComponent } from './user-edit.component';
import { UserFormModule } from '../../shared/modules/user-form/user-form.module';

@NgModule({
  declarations: [
    UserEditComponent
  ],
  imports: [
    CommonModule,
    UserFormModule
  ]
})
export class UserEditModule {
}
