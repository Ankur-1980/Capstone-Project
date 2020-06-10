import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css'],
})
export class NewUserFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      age: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        ],
      ],
      bio: ['', [Validators.maxLength(255)]],
    });
  }

  validateDOB(dob) {
    console.log(dob.target.value);

    let year = new Date(dob.target.value).getFullYear();
    let today = new Date().getFullYear();
    if (today - year >= 21) {
      console.log(`you can drink`);
    } else {
      console.log(`you are not old enough`);
    }
  }

  getFirstName() {
    return this.loginForm.get('firstName');
  }
  getUserName() {
    return this.loginForm.get('userName');
  }
  getAge() {
    return this.loginForm.get('age');
  }
  getEmail() {
    return this.loginForm.get('getEmail');
  }

  onSubmit() {
    // console.log('form', this.loginForm.value);
    this.loginService.addNewUser(this.loginForm.value);
  }
}
