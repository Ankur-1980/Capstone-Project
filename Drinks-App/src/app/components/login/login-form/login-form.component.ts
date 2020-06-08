import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      userName: ['', [Validators.required]],
      age: ['21', [Validators.min(21), Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        ],
      ],
    });
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
