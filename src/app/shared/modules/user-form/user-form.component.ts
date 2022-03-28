import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { UserService } from '../../../pages/users/services/user.service';
import { User } from '../../../pages/users/classes/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input() user: User;

  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  goBack() {
    this.router.navigate(['users']);
  }

  saveForm() {
    const userFormValue: User = this.userForm.getRawValue();

    if (this.isCreateMode) {
      this.userService.createUser(userFormValue).subscribe({
        next: () => {
          this.router.navigate(['users']);
        }
      })
    } else {
      this.userService.editUser(userFormValue, this.user.id).subscribe({
        next: () => {
          this.router.navigate(['users']);
        }
      })
    }
  }

  getControl(name: string): AbstractControl {
    return this.userForm.get(name);
  }

  isControlRequired(name: string): boolean {
    return this.getControl(name).hasValidator(Validators.required);
  }

  isControlRequiredAndTouched(name: string): boolean {
    const formControl = this.getControl(name);
    const isRequired = formControl.hasValidator(Validators.required);
    const isTouched = formControl.touched;

    return isRequired && isTouched;
  }

  isControlInvalid(name: string): boolean {
    return this.getControl(name).invalid;
  }

  hasError(controlName: string, errorCode: string): boolean {
    return this.getControl(controlName).hasError(errorCode);
  }

  private initForm() {
    this.userForm = this.formBuilder.group({
      name: [
        this.user?.name, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(8)
        ]
      ],
      image: [this.user?.image, [Validators.required, Validators.minLength(3)]]
    });
  }

  get isCreateMode(): boolean {
    return !this.user;
  }
}
