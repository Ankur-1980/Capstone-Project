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
      bio: [''],
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
