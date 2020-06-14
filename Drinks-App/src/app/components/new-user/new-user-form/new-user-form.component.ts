import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css'],
})
export class NewUserFormComponent implements OnInit {
  newUserForm: FormGroup;

  constructor(private fb: FormBuilder, private usersService: UsersService) {}

  ngOnInit(): void {
    this.newUserForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      age: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      password2: ['', [Validators.required, ,]],
      bio: ['', [Validators.maxLength(255)]],
      date: this.fb.control(new Date()),
    });
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

  // getFirstName() {
  //   return this.newUserForm.get('firstName');
  // }
  // getUserName() {
  //   return this.newUserForm.get('userName');
  // }
  // getAge() {
  //   return this.newUserForm.get('age');
  // }
  // getEmail() {
  //   return this.newUserForm.get('getEmail');
  // }

  onSubmit() {
    // console.log('form', this.newUserForm.value);
    this.usersService.addNewUser(this.newUserForm.value);
  }
}
