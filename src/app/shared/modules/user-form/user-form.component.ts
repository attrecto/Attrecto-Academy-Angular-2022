import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.userForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.min(3)]],
      image: [null, [Validators.required, Validators.min(3)]]
    });
  }
}
