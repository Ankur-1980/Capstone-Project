import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../../../services/users.service';
import { RegisterValidatorsService } from 'src/app/services/register-validators.service';

@Component({
  selector: 'new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css'],
})
export class NewUserFormComponent implements OnInit {
  newUserForm: FormGroup;
  registered: boolean = false;
  ageValidation;
  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private formValidators: RegisterValidatorsService
  ) {}

  ngOnInit(): void {
    this.newUserForm = this.fb.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        userName: ['', [Validators.required]],
        age: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        password2: ['', [Validators.required]],
        bio: ['', [Validators.maxLength(255)]],
        date: this.fb.control(new Date()),
      },
      {
        validator: this.formValidators.PasswordValidation(
          'password',
          'password2'
        ),
      }
    );
    this.newUserForm.valueChanges.subscribe(
      (value) => (this.ageValidation = value.age)
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

  // validateDOB(dob) {
  //   let year = new Date(dob.target.value).getFullYear();
  //   let today = new Date().getFullYear();
  //   if (today - year >= 21) {
  //     console.log(`you can drink`);
  //   } else {
  //     console.log(`you are not old enough`);
  //   }
  // }

  getAge() {
    const today = new Date();
    const birthDate = new Date(this.ageValidation);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    if (age >= 21) {
      console.log('DRINK UP!');
    } else {
      console.log('no drinks for you');
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
