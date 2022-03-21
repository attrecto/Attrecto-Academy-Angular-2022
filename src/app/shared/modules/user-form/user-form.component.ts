import { Component, OnInit } from '@angular/core';
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

    this.userService.createUser(userFormValue).subscribe({
      next: () => {
        this.router.navigate(['users']);
      }
    })
  }

  private initForm() {
    this.userForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.min(3)]],
      image: [null, [Validators.required, Validators.min(3)]]
    });
  }
}
