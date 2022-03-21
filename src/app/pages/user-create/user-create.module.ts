import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCreateComponent } from './user-create.component';
import { UserFormModule } from '../../shared/modules/user-form/user-form.module';

@NgModule({
  declarations: [
    UserCreateComponent
  ],
  imports: [
    CommonModule,
    UserFormModule
  ]
})
export class UserCreateModule {
}
