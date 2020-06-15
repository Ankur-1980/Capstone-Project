import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
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
}
