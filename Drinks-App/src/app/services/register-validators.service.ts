import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class RegisterValidatorsService {
  constructor() {}

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

  // getAge(age) {
  //   return (formGroup: FormGroup) => {
  //     const ageControl = formGroup.controls[age];
  //     const today = new Date();
  //     const birthDate = new Date(ageControl);
  //     let newAge = today.getFullYear() - birthDate.getFullYear();
  //     const m = today.getMonth() - birthDate.getMonth();
  //     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  //       newAge--;
  //     }
  //     if (newAge >= 21) {
  //       console.log('DRINK UP!');
  //     } else {
  //       console.log('no drinks for you');
  //     }
  //   };
  // }
}
