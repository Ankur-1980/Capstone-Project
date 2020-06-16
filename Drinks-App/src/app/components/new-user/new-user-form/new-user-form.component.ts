import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../../../services/users.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css'],
})
export class NewUserFormComponent implements OnInit {
  newUserForm: FormGroup;
  registered: boolean = false;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    public nav: NavbarService
  ) {}

  ngOnInit(): void {
    this.nav.hide();
    this.newUserForm = this.fb.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        userName: ['', [Validators.required]],
        age: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        password2: ['', [Validators.required, ,]],
        bio: ['', [Validators.maxLength(255)]],
        date: this.fb.control(new Date()),
      },
      {
        validator: this.usersService.PasswordValidation(
          'password',
          'password2'
        ),
      }
    );
  }

  get firstName() {
    return this.newUserForm.get('firstName');
  }
  get lastName() {
    return this.newUserForm.get('lastName');
  }
  get userName() {
    return this.newUserForm.get('userName');
  }
  // get age() {
  //   return this.newUserForm.get('age');
  // }
  get email() {
    return this.newUserForm.get('firstName');
  }
  get password() {
    return this.newUserForm.get('password');
  }
  get password2() {
    return this.newUserForm.get('password2');
  }

  validateDOB(dob) {
    let year = new Date(dob.target.value).getFullYear();
    let today = new Date().getFullYear();
    if (today - year >= 21) {
      console.log(`you can drink`);
    } else {
      console.log(`you are not old enough`);
    }
  }

  // // this doesn't work :()
  // get newUserFormControl() {
  //   return this.newUserForm.controls;
  // }

  onSubmit() {
    this.registered = true;
    if (this.newUserForm.valid) {
      console.log('form', this.newUserForm.value);
      this.usersService.addNewUser(this.newUserForm.value);
    }
  }
}
