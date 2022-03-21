import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  private initForm() {
    this.userForm = this.formBuilder.group({
      name: [this.user?.name, [Validators.required, Validators.min(3)]],
      image: [this.user?.image, [Validators.required, Validators.min(3)]]
    });
  }

  get isCreateMode(): boolean {
    return !this.user;
  }
}
