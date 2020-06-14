import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private usersService: UsersService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: [''],
      password: [''],
      loginDate: this.fb.control(new Date()),
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
