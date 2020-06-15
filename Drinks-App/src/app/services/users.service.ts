import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  userNameList = [];

  constructor(private http: HttpClient, private router: Router) {}

  getUsers(): any {
    return this.http.get('/api/users');
  }

  addNewUser(formValue) {
    this.http
      .post<{ message: string }>('/api/users/register', formValue)
      .subscribe((response) => {
        console.log(response.message);
      });
    this.router.navigate(['/login']);
  }

  login() {
    this.router.navigate(['/the-feed']);
  }

  PasswordValidation(password: string, password2: string) {
    return (formGroup: FormGroup) => {
      // get the passwords from the controls
      const passwordControl = formGroup.controls[password];
      const password2Control = formGroup.controls[password2];

      if (!passwordControl || !password2Control) {
        return null;
      }

      if (
        password2Control.errors &&
        !password2Control.errors.passwordMismatch
      ) {
        return null;
      }

      if (passwordControl.value !== password2Control.value) {
        password2Control.setErrors({ passwordMismatch: true });
      } else {
        password2Control.setErrors(null);
      }
    };
  }

  // userNameDuplicated(userControl: AbstractControl) {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       if (this.checkUserName(userControl.value)) {
  //         resolve({ userNameNotAvailable: true });
  //       } else {
  //         resolve(null);
  //       }
  //     }, 1000);
  //   });
  // }

  // checkUserName(userName: string) {
  //   return this.userNameList.indexOf(userName) > -1;
  // }
}
